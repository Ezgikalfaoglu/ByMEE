import type { ActionService } from '@/services';
import { ServiceError } from '../errors';
import type { Action, Approval } from '@/types/models';
import { clone, hashDetails, hoursAfter, nextId, nowIso, run } from './base';
import { action, approvals } from './sampleData';

const actions = new Map<string, Action>([[action.id, clone(action)]]);
let approvalList: Approval[] = clone(approvals);

function mustAction(id: string) {
  const a = actions.get(id);
  if (!a) throw new ServiceError('Action not found.', 'actions');
  return a;
}

/** The details an approval is tied to. Change any of them → approve again (BM-021). */
export function actionDetails(a: Action) {
  return { type: a.type, target: a.target, goal: a.goal, limits: a.limits, mayShare: a.mayShare, scope: a.scope };
}

/** Valid = matches the current details and is under 24 hours old (BM-022). */
export function findValidApproval(a: Action, at = Date.now()): Approval | null {
  const hash = hashDetails(actionDetails(a));
  return (
    approvalList.find((ap) => ap.actionId === a.id && ap.detailsHash === hash && new Date(ap.expiresAt).getTime() > at) ??
    null
  );
}

export const mockActionService: ActionService = {
  getAction: (actionId) => run('actions', () => clone(mustAction(actionId))),
  updateLimits: (actionId, patch) =>
    run('actions', () => {
      const a = mustAction(actionId);
      if (patch.limits) a.limits = { ...a.limits, ...patch.limits };
      if (patch.mayShare) a.mayShare = patch.mayShare;
      if (patch.scope) a.scope = patch.scope;
      // Old approvals no longer match the new details, so the user approves again.
      a.status = 'proposed';
      return clone(a);
    }),
  approve: (actionId) =>
    run('actions', () => {
      const a = mustAction(actionId);
      const approvedAt = nowIso();
      const ap: Approval = {
        id: nextId('approval'),
        actionId,
        approvedAt,
        expiresAt: hoursAfter(approvedAt, 24),
        detailsHash: hashDetails(actionDetails(a)),
      };
      approvalList.push(ap);
      a.status = 'approved';
      return clone(ap);
    }),
  decline: (actionId) =>
    run('actions', () => {
      const a = mustAction(actionId);
      a.status = 'not-approved';
      return clone(a);
    }),
  getApproval: (actionId) => run('actions', () => clone(findValidApproval(mustAction(actionId)))),
};

export function resetActionsMock() {
  actions.clear();
  actions.set(action.id, clone(action));
  approvalList = clone(approvals);
}
