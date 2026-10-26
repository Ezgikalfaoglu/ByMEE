import type { BookingService } from '@/services';
import { ServiceError } from '../errors';
import type { Appointment } from '@/types/models';
import { clone, nextId, run } from './base';
import { appointmentTemplate, slots } from './sampleData';

const appointments = new Map<string, Appointment>();

function minutesBefore(iso: string, minutes: number) {
  return new Date(new Date(iso).getTime() - minutes * 60 * 1000).toISOString();
}

function fromSlot(slotId: string, taskId: string, offerId?: string, id = nextId('apt')): Appointment {
  const slot = slots.find((s) => s.id === slotId);
  if (!slot) throw new ServiceError('That time is no longer available.', 'booking');
  if (slot.clashesWith) throw new ServiceError(`This clashes with ${slot.clashesWith}.`, 'booking');
  return {
    ...clone(appointmentTemplate),
    id,
    taskId,
    offerId,
    title: slot.title,
    start: slot.start,
    end: slot.end,
    walkMinutes: slot.walkMinutes,
    // Arrive 10 min early; the reminder gives time to walk over (walk + 10 + 25 min to get ready).
    arriveBy: minutesBefore(slot.start, 10),
    reminderAt: minutesBefore(slot.start, slot.walkMinutes + 10 + 27),
    status: 'scheduled',
  };
}

function mustAppointment(id: string) {
  const a = appointments.get(id);
  if (!a) throw new ServiceError('Booking not found.', 'booking');
  return a;
}

export const mockBookingService: BookingService = {
  book: (slotId, taskId, offerId) =>
    run('booking', () => {
      const apt = fromSlot(slotId, taskId, offerId);
      appointments.set(apt.id, apt);
      return clone(apt);
    }),
  getAppointment: (appointmentId) => run('booking', () => clone(mustAppointment(appointmentId))),
  changeTime: (appointmentId, slotId) =>
    run('booking', () => {
      const old = mustAppointment(appointmentId);
      const next = fromSlot(slotId, old.taskId, old.offerId, old.id);
      next.confirmationCode = old.confirmationCode;
      appointments.set(old.id, next);
      return clone(next);
    }),
  cancel: (appointmentId) =>
    run('booking', () => {
      const a = mustAppointment(appointmentId);
      a.status = 'cancelled';
      return clone(a);
    }),
};

export function resetBookingMock() {
  appointments.clear();
}
