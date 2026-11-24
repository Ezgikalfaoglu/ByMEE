/**
 * Authority rules (BM-013, Berfin). No UI here.
 *
 * - The limit slider goes from ₺0 to ₺10.000 in ₺500 steps; default ₺5.000.
 * - A booking is automatic only when "Book under the limit without asking" is on,
 *   the amount is within the limit, the rule has not expired and the study
 *   condition is B. Condition A (research) always asks.
 * - A payment is never silent: saved card on = ask first, off = no card at all.
 * - Contact details are shared only with the recipients the rule names.
 * - Every function returns a new object; nothing is mutated.
 */

import type { Condition, IsoDateTime } from '@/types/common';
import type { AuthorityRule, AuthorityTask, Decision, ValidFor } from '../types';

export const LIMIT_MIN = 0;
export const LIMIT_MAX = 10000;
export const LIMIT_STEP = 500;
export const DEFAULT_LIMIT = 5000;

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

/** Snaps any value to the slider's ₺500 steps inside ₺0–₺10.000. */
export function clampLimit(value: number): number {
  if (!Number.isFinite(value)) return LIMIT_MIN;
  const stepped = Math.round(value / LIMIT_STEP) * LIMIT_STEP;
  return Math.min(LIMIT_MAX, Math.max(LIMIT_MIN, stepped));
}

/** expiresAt for a choice of "Valid for": end of task / +7 days / null. */
export function expiresAtFor(validFor: ValidFor, task: AuthorityTask, now: Date = new Date()): IsoDateTime | null {
  if (validFor === 'task') return task.endsAt;
  if (validFor === '7d') return new Date(now.getTime() + SEVEN_DAYS_MS).toISOString();
  return null;
}

/** The rule as screen 35 first shows it: ₺5.000, book and share on, saved card off, this task. */
export function createDefaultRule(task: AuthorityTask, now: Date = new Date()): AuthorityRule {
  return {
    id: `rule-${task.id}`,
    taskId: task.id,
    limitPerAction: DEFAULT_LIMIT,
    autoBook: true,
    shareContact: true,
    shareRecipients: [...task.shareRecipients],
    payWithSavedCard: false,
    validFor: 'task',
    expiresAt: expiresAtFor('task', task, now),
  };
}

export function setLimit(rule: AuthorityRule, limitPerAction: number): AuthorityRule {
  return { ...rule, limitPerAction: clampLimit(limitPerAction) };
}

export function setValidFor(rule: AuthorityRule, validFor: ValidFor, task: AuthorityTask, now: Date = new Date()): AuthorityRule {
  return { ...rule, validFor, expiresAt: expiresAtFor(validFor, task, now) };
}

export function setSwitch(
  rule: AuthorityRule,
  key: 'autoBook' | 'shareContact' | 'payWithSavedCard',
  value: boolean,
): AuthorityRule {
  return { ...rule, [key]: value };
}

/** True while the rule has no expiry or `now` is not past it. An unreadable date counts as expired. */
export function isRuleActive(rule: AuthorityRule, now: Date = new Date()): boolean {
  if (rule.expiresAt === null) return true;
  const until = new Date(rule.expiresAt).getTime();
  return Number.isFinite(until) && now.getTime() <= until;
}

/** Limit 0 means Beemy asks before every action (note under the slider). */
export function asksBeforeEveryAction(rule: AuthorityRule): boolean {
  return rule.limitPerAction <= 0;
}

/**
 * A booking (hotel, flight, table…) for `amount` lira.
 * Automatic only under condition B, with "Book under the limit" on, within the limit and before expiry.
 */
export function decideBooking(
  rule: AuthorityRule,
  amount: number,
  condition: Condition,
  now: Date = new Date(),
): Decision {
  if (!Number.isFinite(amount) || amount < 0) return 'blocked';
  if (condition === 'A') return 'needs_approval';
  if (!isRuleActive(rule, now)) return 'needs_approval';
  if (!rule.autoBook) return 'needs_approval';
  if (amount > rule.limitPerAction) return 'needs_approval';
  return 'auto';
}

/** A payment with the saved card: never silent. Off means the card may not be used at all. */
export function decidePayment(rule: AuthorityRule, amount: number): Decision {
  if (!Number.isFinite(amount) || amount < 0) return 'blocked';
  return rule.payWithSavedCard ? 'needs_approval' : 'blocked';
}

/** Sharing phone and email with `recipient`: automatic only for a named recipient while the rule is active. */
export function decideShareContact(rule: AuthorityRule, recipient: string, now: Date = new Date()): Decision {
  if (!rule.shareContact) return 'needs_approval';
  if (!isRuleActive(rule, now)) return 'needs_approval';
  return rule.shareRecipients.includes(recipient) ? 'auto' : 'needs_approval';
}
