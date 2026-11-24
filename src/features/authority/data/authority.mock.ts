/**
 * Mock authorityService and in-memory store (BM-013, Berfin).
 *
 * Same names as the doc's service table: getRule(taskId), saveRule(rule).
 * Goes through `run('execution', …)` like every mock (BM-003): 600 ms delay,
 * `failNextCall('execution')` for the error state, `simulated: true` on every result.
 *
 * The sample task is the one on the Figma frame ("Antalya trip"). When BM-004
 * (task definition) lands, `getAuthoritySetup` reads the title, the people in
 * scope and the end date from the real task.
 * The doc places the real service in src/execution/authority.ts (shared folder);
 * it moves there with Ezgi's OK, the screen keeps calling the same functions.
 */

import { clone, nowIso, run, type Result } from '@/services';
import type { Id } from '@/types/common';
import type { AuthorityRule, AuthorityTask } from '../types';

/** Elif Yılmaz plans a trip to Antalya: the example on frame "35 · BM-013 · Authority setup · Berfin". */
export const sampleTask: AuthorityTask = {
  id: 'demo',
  title: 'Antalya trip',
  shareRecipients: ['hotel'],
  endsAt: null,
};

/** A log line written when a rule is saved (status 'auto', title "Permissions set for {task}"). */
export type AuthorityLogEntry = {
  id: Id;
  taskId: Id;
  status: 'auto';
  title: string;
  at: string;
};

/** Rules are stored with the task (keyed by task id), never in the profile. */
const rules = new Map<Id, AuthorityRule>();
const log: AuthorityLogEntry[] = [];

/** Task info for the header plus the rule saved earlier, if any. */
export function getAuthoritySetup(taskId: Id): Promise<Result<{ task: AuthorityTask; rule: AuthorityRule | null }>> {
  return run('execution', () => ({
    task: { ...clone(sampleTask), id: taskId },
    rule: readRule(taskId),
  }));
}

/** authorityService.getRule(taskId): the saved rule or null. */
export function getRule(taskId: Id): Promise<Result<AuthorityRule | null>> {
  return run('execution', () => readRule(taskId));
}

/** authorityService.saveRule(rule): "Save permissions". Stores the rule with the task and writes the log line. */
export function saveRule(rule: AuthorityRule, taskTitle: string): Promise<Result<AuthorityRule>> {
  return run('execution', () => {
    const stored: AuthorityRule = { ...clone(rule), savedAt: nowIso() };
    const key = stored.taskId ?? 'global';
    rules.set(key, stored);
    log.push({
      id: `log-${log.length + 1}`,
      taskId: key,
      status: 'auto',
      title: `Permissions set for ${taskTitle}`,
      at: stored.savedAt ?? nowIso(),
    });
    return clone(stored);
  });
}

/** Synchronous read for the execution layer (BM-029, BM-037) and tests. */
export function readRule(taskId: Id): AuthorityRule | null {
  const stored = rules.get(taskId);
  return stored ? clone(stored) : null;
}

/** Log lines written by this mock, for 45 Activity log (BM-070) and tests. */
export function readAuthorityLog(): AuthorityLogEntry[] {
  return clone(log);
}

/** Tests call this in beforeEach. */
export function resetAuthorityMock() {
  rules.clear();
  log.length = 0;
}
