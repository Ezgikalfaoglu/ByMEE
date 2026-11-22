/**
 * Mock data and in-memory store for task authority (BM-013, Berfin).
 *
 * Goes through `run('execution', …)` like every mock (BM-003): 600 ms delay,
 * `failNextCall('execution')` for the error state, `simulated: true` on every result.
 *
 * The proposal is sample data for the career scenario shown on the Figma frame.
 * When BM-004 (task definition) lands, `getAuthorityProposal` derives it from the
 * task's allowed actions, people in scope, shareable documents, valid until and amount cap.
 */

import { clone, nowIso, run, type Result } from '@/services';
import type { Id } from '@/types/common';
import type { AuthorityProposal, TaskAuthority } from '../types';
import { authorityTexts as t } from './authority.texts';

/** Elif Yılmaz applies for a job: the example on the Figma frame "21 · BM-013 · Authority setup · Berfin". */
export const sampleAuthorityProposal: AuthorityProposal = {
  taskId: 'demo',
  actions: [
    { kind: 'search', label: 'İlan ara ve karşılaştır' },
    { kind: 'prepare_document', label: 'CV ve başvuru mesajı hazırla' },
    { kind: 'send', label: 'Başvuruyu gönder' },
    { kind: 'pay', label: t.pay },
    { kind: 'share_document', label: t.shareDocument },
  ],
  limits: {
    recipient: 'Yalnızca ilan sahibi şirket',
    shareableData: ['CV_en.pdf', 'e-posta'],
    validUntil: '2026-11-27T23:59:00+03:00',
    amountCap: 0,
  },
};

/** Authority is stored with the task (keyed by task id), never in the profile. */
const granted = new Map<Id, TaskAuthority>();

/** The proposal for a task. Unknown ids get the sample proposal until BM-004 provides real tasks. */
export function getAuthorityProposal(taskId: Id): Promise<Result<AuthorityProposal>> {
  return run('execution', () => ({ ...clone(sampleAuthorityProposal), taskId }));
}

/** "Yetkiyi ver ve başlat": stores the authority with the task and stamps `grantedAt`. */
export function grantAuthority(authority: TaskAuthority): Promise<Result<TaskAuthority>> {
  return run('execution', () => {
    const stored: TaskAuthority = { ...clone(authority), grantedAt: nowIso() };
    granted.set(stored.taskId, stored);
    return clone(stored);
  });
}

/** Synchronous read for the execution layer (BM-023) and tests. Undefined when nothing was granted. */
export function readGrantedAuthority(taskId: Id): TaskAuthority | undefined {
  const stored = granted.get(taskId);
  return stored ? clone(stored) : undefined;
}

/** Tests call this in beforeEach. */
export function resetAuthorityMock() {
  granted.clear();
}
