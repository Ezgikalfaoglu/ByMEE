import {
  DEFAULT_LIMIT,
  LIMIT_MAX,
  asksBeforeEveryAction,
  clampLimit,
  createDefaultRule,
  decideBooking,
  decidePayment,
  decideShareContact,
  expiresAtFor,
  isRuleActive,
  setLimit,
  setSwitch,
  setValidFor,
} from './authority';
import type { AuthorityTask } from '../types';

const task: AuthorityTask = {
  id: 'task-1',
  title: 'Antalya trip',
  shareRecipients: ['hotel'],
  endsAt: '2026-12-15T23:59:00+03:00',
};
const now = new Date('2026-12-01T10:00:00+03:00');

describe('authority rule (BM-013)', () => {
  it('starts at ₺5.000, book and share on, saved card off, valid for this task', () => {
    const rule = createDefaultRule(task, now);
    expect(rule).toMatchObject({
      taskId: 'task-1',
      limitPerAction: DEFAULT_LIMIT,
      autoBook: true,
      shareContact: true,
      shareRecipients: ['hotel'],
      payWithSavedCard: false,
      validFor: 'task',
      expiresAt: task.endsAt,
    });
  });

  it('snaps the limit to ₺500 steps between ₺0 and ₺10.000', () => {
    expect(clampLimit(5200)).toBe(5000);
    expect(clampLimit(5250)).toBe(5500);
    expect(clampLimit(-100)).toBe(0);
    expect(clampLimit(99999)).toBe(LIMIT_MAX);
    expect(clampLimit(Number.NaN)).toBe(0);
    expect(setLimit(createDefaultRule(task, now), 8450).limitPerAction).toBe(8500);
  });

  it('"Valid for" sets expiresAt: end of task / +7 days / null', () => {
    expect(expiresAtFor('task', task, now)).toBe(task.endsAt);
    expect(expiresAtFor('task', { ...task, endsAt: null }, now)).toBeNull();
    expect(expiresAtFor('7d', task, now)).toBe('2026-12-08T07:00:00.000Z');
    expect(expiresAtFor('always', task, now)).toBeNull();
    const rule = setValidFor(createDefaultRule(task, now), 'always', task, now);
    expect(rule.validFor).toBe('always');
    expect(rule.expiresAt).toBeNull();
  });

  it('given ₺5.000 and This task, when Beemy proposes ₺8.450, then the decision is needs_approval', () => {
    const rule = createDefaultRule(task, now);
    expect(decideBooking(rule, 8450, 'B', now)).toBe('needs_approval');
  });

  it('given ₺10.000, when it proposes ₺8.450 with Book on, then it books without asking (condition B)', () => {
    const rule = setLimit(createDefaultRule(task, now), 10000);
    expect(decideBooking(rule, 8450, 'B', now)).toBe('auto');
  });

  it('condition A ignores "Book without asking" and always asks', () => {
    const rule = setLimit(createDefaultRule(task, now), 10000);
    expect(decideBooking(rule, 100, 'A', now)).toBe('needs_approval');
  });

  it('"Book under the limit" off means every booking asks', () => {
    const rule = setSwitch(createDefaultRule(task, now), 'autoBook', false);
    expect(decideBooking(rule, 100, 'B', now)).toBe('needs_approval');
  });

  it('limit 0 means Beemy asks before every action', () => {
    const rule = setLimit(createDefaultRule(task, now), 0);
    expect(asksBeforeEveryAction(rule)).toBe(true);
    expect(decideBooking(rule, 1, 'B', now)).toBe('needs_approval');
    expect(decideBooking(rule, 0, 'B', now)).toBe('auto');
    expect(asksBeforeEveryAction(createDefaultRule(task, now))).toBe(false);
  });

  it('nothing is automatic after expiresAt or with an unreadable date', () => {
    const rule = createDefaultRule(task, now);
    const later = new Date('2026-12-16T00:00:00+03:00');
    expect(isRuleActive(rule, now)).toBe(true);
    expect(isRuleActive(rule, later)).toBe(false);
    expect(decideBooking(rule, 100, 'B', later)).toBe('needs_approval');
    expect(decideShareContact(rule, 'hotel', later)).toBe('needs_approval');
    expect(isRuleActive({ ...rule, expiresAt: 'yarın' }, now)).toBe(false);
    expect(isRuleActive({ ...rule, expiresAt: null }, later)).toBe(true);
  });

  it('a payment is never silent: saved card on asks first, off blocks the card', () => {
    const off = createDefaultRule(task, now);
    expect(decidePayment(off, 100)).toBe('blocked');
    const on = setSwitch(off, 'payWithSavedCard', true);
    expect(decidePayment(on, 100)).toBe('needs_approval');
    expect(decidePayment(on, 0)).toBe('needs_approval');
    expect(decidePayment(on, -5)).toBe('blocked');
    expect(decideBooking(on, Number.NaN, 'B', now)).toBe('blocked');
  });

  it('contact details go only to the named recipients', () => {
    const rule = createDefaultRule(task, now);
    expect(decideShareContact(rule, 'hotel', now)).toBe('auto');
    expect(decideShareContact(rule, 'airline', now)).toBe('needs_approval');
    expect(decideShareContact(setSwitch(rule, 'shareContact', false), 'hotel', now)).toBe('needs_approval');
  });

  it('never mutates the task or a previous rule', () => {
    const rule = createDefaultRule(task, now);
    const changed = setSwitch(setLimit(rule, 0), 'autoBook', false);
    expect(rule.limitPerAction).toBe(DEFAULT_LIMIT);
    expect(rule.autoBook).toBe(true);
    expect(changed.limitPerAction).toBe(0);
    changed.shareRecipients.push('airline');
    expect(task.shareRecipients).toEqual(['hotel']);
  });
});
