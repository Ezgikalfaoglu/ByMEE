/**
 * Shared helpers for mock services (BM-003).
 *
 * `run(service, fn)` is the only way a mock answers:
 *  1. waits `mockConfig.delayMs` (600 ms) so loading states show,
 *  2. fails if `failNextCall(service)` was called, so error states can be tested,
 *  3. wraps the answer as `{ data, simulated: true }`.
 */

import type { Result } from '@/services';
import { ServiceError } from '../errors';
import { mockConfig, type ServiceName } from '../mockConfig';

export function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export async function run<T>(service: ServiceName, fn: () => T | Promise<T>): Promise<Result<T>> {
  await delay(mockConfig.delayMs);
  const failMessage = mockConfig.failNext[service];
  if (failMessage) {
    delete mockConfig.failNext[service];
    throw new ServiceError(failMessage, service);
  }
  return { data: await fn(), simulated: true };
}

/** Deep copy so screens never mutate the in-memory sample data by accident. */
export function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

let counter = 1000;
/** Simple unique id for things created at runtime, e.g. "apt-1001". */
export function nextId(prefix: string) {
  counter += 1;
  return `${prefix}-${counter}`;
}

export function nowIso() {
  return new Date().toISOString();
}

/** ISO string `hours` hours after `from` (used for approval expiry). */
export function hoursAfter(from: string, hours: number) {
  return new Date(new Date(from).getTime() + hours * 60 * 60 * 1000).toISOString();
}

/** Stable hash of the action details; a change produces a different hash. */
export function hashDetails(value: unknown) {
  const text = JSON.stringify(value);
  let h = 0;
  for (let i = 0; i < text.length; i += 1) h = (h * 31 + text.charCodeAt(i)) | 0;
  return `h${(h >>> 0).toString(16)}`;
}
