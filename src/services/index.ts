/**
 * Shared service layer (BM-003, Berfin).
 *
 * Screens import from '@/services' and never talk to a mock directly, so a
 * real implementation can replace a mock later without touching screens.
 * Each module adds its service interface and mock here in its own PR:
 * profile (Melike), tasks and tools (Eda), simulator and execution (Berfin).
 *
 *   const { data, simulated } = await services.tasks.getTask(id);
 *
 * Every call resolves to `Result<T>`. When `simulated` is true the screen shows
 * the badge "Simülasyon · sentetik veri". A failing call rejects with
 * `ServiceError`; show its `message` in the error state.
 */

export type { ServiceName, MockConfig } from './mockConfig';
export { failNextCall, mockConfig, resetMockConfig, setMockDelay } from './mockConfig';
export { ServiceError, isServiceError } from './errors';
export { run, clone, delay, nextId, nowIso } from './mock/base';

/** What every service call returns. */
export type Result<T> = {
  data: T;
  /** true when the data comes from a mock or the simulator. */
  simulated: boolean;
};
