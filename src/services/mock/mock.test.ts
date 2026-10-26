import { failNextCall, isServiceError, services, setMockDelay } from '@/services';
import { resetAllMocks } from './reset';

beforeEach(() => {
  resetAllMocks();
  setMockDelay(0);
});

describe('mock service rules (BM-003)', () => {
  it('every result is marked simulated: true', async () => {
    const profile = await services.profile.getProfile();
    expect(profile.simulated).toBe(true);
    expect(profile.data.firstName).toBe('Elif');
  });

  it('waits the configured delay before answering', async () => {
    setMockDelay(50);
    const started = Date.now();
    await services.tasks.listTasks();
    expect(Date.now() - started).toBeGreaterThanOrEqual(45);
  });

  it('can be told to fail the next call, then recovers', async () => {
    failNextCall('calls', 'The call didn’t go through.');
    await expect(services.calls.startCall('act-call-form-room')).rejects.toMatchObject({
      message: 'The call didn’t go through.',
      service: 'calls',
    });
    const second = await services.calls.startCall('act-call-form-room');
    expect(second.data.outcome).toBe('offer');
  });

  it('returned data is a copy, not the stored object', async () => {
    const a = await services.profile.getProfile();
    a.data.firstName = 'Changed';
    const b = await services.profile.getProfile();
    expect(b.data.firstName).toBe('Elif');
  });
});

describe('demo flow 19 → 24', () => {
  it('the first ByMEE line of the call is the required sentence', async () => {
    const call = await services.calls.startCall('act-call-form-room');
    expect(call.data.transcript[0]).toMatchObject({
      speaker: 'ByMEE',
      text: 'Hi, I’m ByMEE, an AI assistant calling for Elif.',
    });
  });

  it('approval is valid for the exact details and invalid after a change (BM-021, BM-022)', async () => {
    expect((await services.actions.getApproval('act-call-form-room')).data).toBeNull();
    await services.actions.approve('act-call-form-room');
    expect((await services.actions.getApproval('act-call-form-room')).data).not.toBeNull();

    await services.actions.updateLimits('act-call-form-room', { limits: { targetPrice: 3000, maxPrice: 3400 } });
    expect((await services.actions.getApproval('act-call-form-room')).data).toBeNull();
  });

  it('never accepts an offer above the highest price (BM-031)', async () => {
    try {
      await services.offers.acceptOffer('offer-form-room', 3000);
      throw new Error('should have failed');
    } catch (e) {
      expect(isServiceError(e)).toBe(true);
      expect((e as Error).message).toBe('This offer is above your highest price (₺3.000).');
    }
    const ok = await services.offers.acceptOffer('offer-form-room', 3400);
    expect(ok.data.status).toBe('accepted');
  });

  it('refuses to book a clashing slot and books the recommended one (BM-035, BM-036)', async () => {
    await expect(services.booking.book('slot-tue-1730', 'task-pilates')).rejects.toMatchObject({
      message: 'This clashes with Finish up at work.',
    });
    const booked = await services.booking.book('slot-tue-1830', 'task-pilates', 'offer-form-room');
    expect(booked.data.confirmationCode).toBe('FR-2710');
    expect(booked.data.status).toBe('scheduled');
    const cancelled = await services.booking.cancel(booked.data.id);
    expect(cancelled.data.status).toBe('cancelled');
  });

  it('calendar off → no clash info and nothing recommended (BM-012 rule)', async () => {
    await services.consent.setAllowed('calendar', false);
    expect(await services.calendar.isConnected()).toBe(false);
    const slots = await services.calendar.getSlots('2026-10-27');
    expect(slots.data.every((s) => !s.recommended && !s.clashesWith)).toBe(true);
  });
});
