/**
 * Mock service settings (BM-003, Berfin).
 *
 * Every mock service:
 * - waits `delayMs` (600 ms by default) so loading states are visible,
 * - can be told to fail its next call, so error states can be tested,
 * - marks every result with `simulated: true`.
 *
 * Each module adds its own service name here in the PR that adds the mock.
 */

export type ServiceName =
  | 'profile' // Melike: verified facts, documents, preferences
  | 'tasks' // Eda: task definitions, plans, options
  | 'tools' // Eda: search, compare, documents, messaging, calendar
  | 'simulator' // Berfin: synthetic world, records
  | 'execution' // Berfin: authority checks, audit log
  | 'research'; // Eda and Melike: scenarios, runs, evaluation

export type MockConfig = {
  /** How long a mock waits before answering. */
  delayMs: number;
  /** Services whose next call should fail. Cleared after one failure. */
  failNext: Partial<Record<ServiceName, string>>;
};

export const mockConfig: MockConfig = {
  delayMs: 600,
  failNext: {},
};

/** Make the next call of a service fail, e.g. failNextCall('tools', 'Araç yanıt vermedi.'). */
export function failNextCall(service: ServiceName, message = 'Bir şeyler ters gitti.') {
  mockConfig.failNext[service] = message;
}

/** Used by tests to answer immediately. */
export function setMockDelay(ms: number) {
  mockConfig.delayMs = ms;
}

/** Back to defaults (tests call this in beforeEach). */
export function resetMockConfig() {
  mockConfig.delayMs = 600;
  mockConfig.failNext = {};
}
