/**
 * Authority rules (BM-013, Berfin). No UI here.
 *
 * - "Ödeme yap" and "Belgeyi başka kişiyle paylaş" start off; the user must turn them on.
 * - An action is allowed only when its switch is on and the authority is still valid.
 * - A payment also has to stay within the amount cap.
 * - Every function returns a new object; nothing is mutated.
 */

import type { Condition } from '@/types/common';
import type { ActionKind, AuthorityProposal, TaskAuthority } from '../types';

/** Actions that are off by default and carry the lock icon on screen 21. */
export const SENSITIVE_ACTIONS: readonly ActionKind[] = ['pay', 'share_document'];

export function isSensitive(kind: ActionKind): boolean {
  return SENSITIVE_ACTIONS.includes(kind);
}

/** The authority as screen 21 first shows it: everything on except the sensitive actions. */
export function createAuthority(proposal: AuthorityProposal, condition: Condition = 'B'): TaskAuthority {
  return {
    taskId: proposal.taskId,
    actions: proposal.actions.map((action) => ({ ...action, enabled: !isSensitive(action.kind) })),
    limits: { ...proposal.limits, shareableData: [...proposal.limits.shareableData] },
    condition,
  };
}

export function setActionEnabled(authority: TaskAuthority, kind: ActionKind, enabled: boolean): TaskAuthority {
  return {
    ...authority,
    actions: authority.actions.map((action) => (action.kind === kind ? { ...action, enabled } : action)),
  };
}

export function setCondition(authority: TaskAuthority, condition: Condition): TaskAuthority {
  return { ...authority, condition };
}

/** True while `now` is not past `validUntil`. An unreadable date counts as expired. */
export function isValidAt(authority: TaskAuthority, now: Date = new Date()): boolean {
  const until = new Date(authority.limits.validUntil).getTime();
  return Number.isFinite(until) && now.getTime() <= until;
}

/**
 * The only question the execution layer asks before an action.
 * An action the user never saw, or switched off, or that comes after `validUntil`, is not allowed.
 */
export function isActionAllowed(authority: TaskAuthority, kind: ActionKind, now: Date = new Date()): boolean {
  const action = authority.actions.find((a) => a.kind === kind);
  return Boolean(action?.enabled) && isValidAt(authority, now);
}

/** A payment needs "Ödeme yap" on, a valid authority and an amount within the cap. */
export function isAmountAllowed(authority: TaskAuthority, amount: number, now: Date = new Date()): boolean {
  if (!Number.isFinite(amount) || amount < 0) return false;
  return isActionAllowed(authority, 'pay', now) && amount <= authority.limits.amountCap;
}

/** Condition A: Beemy asks before every binding action (screen 22). */
export function requiresApprovalBeforeAction(authority: TaskAuthority): boolean {
  return authority.condition === 'A';
}
