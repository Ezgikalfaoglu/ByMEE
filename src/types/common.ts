/**
 * Shared base types (BM-003, Berfin).
 *
 * Only the small types every module needs live here. The task definition
 * (BM-004, Eda) and the scenario schema (BM-005, Melike) get their own files.
 * A change here affects all three modules, so it goes through a PR that Ezgi approves.
 *
 * - Dates and times are ISO 8601 strings, e.g. "2026-11-20T18:30:00+03:00".
 * - Money is a plain number in Turkish lira (TRY). Show it with formatMoney().
 * - Everything a mock or the simulator returns is marked `simulated: true`, and
 *   the screen shows the badge "Simülasyon · sentetik veri".
 */

export type Id = string;
/** ISO 8601 date-time string, e.g. "2026-11-20T18:30:00+03:00". */
export type IsoDateTime = string;
/** ISO 8601 date string, e.g. "2026-11-20". */
export type IsoDate = string;
/** Amount in Turkish lira (TRY). */
export type Money = number;
/** App, document and message language. */
export type Lang = 'tr' | 'en';
/** The two study conditions: A approval before action, B task delegation. */
export type Condition = 'A' | 'B';
