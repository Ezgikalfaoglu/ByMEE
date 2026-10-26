import type { CalendarService } from '@/services';
import { clone, run } from './base';
import { mockConsentService } from './consent.mock';
import { calendarEvents, slots } from './sampleData';

export const mockCalendarService: CalendarService = {
  // Follows the "Calendar availability" toggle on screen 05 (BM-012).
  isConnected: () => mockConsentService.isAllowed('calendar'),
  getDay: (date) =>
    run('calendar', async () => {
      if (!(await mockConsentService.isAllowed('calendar'))) return [];
      return clone(calendarEvents[date] ?? []);
    }),
  getSlots: (date) =>
    run('calendar', async () => {
      const connected = await mockConsentService.isAllowed('calendar');
      const daySlots = slots.filter((s) => s.start.startsWith(date));
      // Calendar off: studio times only, no clash check, nothing recommended.
      if (!connected) return clone(daySlots.map((s) => ({ ...s, clashesWith: undefined, recommended: false })));
      return clone(daySlots.sort((a, b) => Number(b.recommended) - Number(a.recommended)));
    }),
};
