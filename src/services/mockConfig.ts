/**
 * Mock service settings (BM-003).
 *
 * Every mock service:
 * - waits `delayMs` (600 ms by default) so loading states are visible,
 * - can be told to fail its next call, so error states can be tested,
 * - marks every result with `simulated: true`.
 *
 * In Period 2 a real implementation replaces a mock by flipping `useMocks`
 * for that service; screens do not change.
 */

export type ServiceName =
  | 'profile'
  | 'preferences'
  | 'consent'
  | 'research'
  | 'tasks'
  | 'actions'
  | 'calls'
  | 'offers'
  | 'calendar'
  | 'booking';

export type MockConfig = {
  /** Which services use the mock implementation. All true in the MVP. */
  useMocks: Record<ServiceName, boolean>;
  /** How long a mock waits before answering. */
  delayMs: number;
  /** Services whose next call should fail. Cleared after one failure. */
  failNext: Partial<Record<ServiceName, string>>;
};

export const mockConfig: MockConfig = {
  useMocks: {
    profile: true,
    preferences: true,
    consent: true,
    research: true,
    tasks: true,
    actions: true,
    calls: true,
    offers: true,
    calendar: true,
    booking: true,
  },
  delayMs: 600,
  failNext: {},
};

/**
 * Make the next call of a service fail, e.g. in a test or from the
 * "Reset demo data" dev menu (BM-004).
 *   failNextCall('calls', 'The call didn’t go through.')
 */
export function failNextCall(service: ServiceName, message = 'Something went wrong.') {
  mockConfig.failNext[service] = message;
}

/** Used by tests to answer immediately. */
export function setMockDelay(ms: number) {
  mockConfig.delayMs = ms;
}

/** Back to defaults (tests call this in afterEach). */
export function resetMockConfig() {
  mockConfig.delayMs = 600;
  mockConfig.failNext = {};
  for (const key of Object.keys(mockConfig.useMocks) as ServiceName[]) mockConfig.useMocks[key] = true;
}
