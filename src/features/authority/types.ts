/**
 * Types that only src/features/authority uses (BM-013, Berfin).
 *
 * The task definition (BM-004, Eda, src/types/taskDefinition.ts) is the source of
 * the proposal: which actions the task needs and which limits it suggests.
 * When BM-004 lands, `AuthorityProposal` is derived from it in data/authority.mock.ts;
 * nothing in the screen or the checks changes.
 */

import type { Condition, Id, IsoDateTime, Money } from '@/types/common';

/**
 * Generic kinds of action the execution layer checks (BM-029).
 * Labels are task-specific ("İlan ara ve karşılaştır"); kinds are not.
 * Preparing a document and sending it are separate permissions (BM-013 rule).
 */
export type ActionKind = 'search' | 'prepare_document' | 'send' | 'pay' | 'share_document';

export type AuthorityAction = {
  kind: ActionKind;
  /** What the switch says on screen 21. */
  label: string;
  enabled: boolean;
};

export type AuthorityLimits = {
  /** Who Beemy may contact, e.g. "Yalnızca ilan sahibi şirket". */
  recipient: string;
  /** Documents and data Beemy may share, e.g. ["CV_en.pdf", "e-posta"]. */
  shareableData: string[];
  /** After this moment no action is allowed. */
  validUntil: IsoDateTime;
  /** Highest amount a single payment may reach. 0 means no payment at all. */
  amountCap: Money;
};

/** What the task proposes before the user decides. */
export type AuthorityProposal = {
  taskId: Id;
  actions: Pick<AuthorityAction, 'kind' | 'label'>[];
  limits: AuthorityLimits;
};

/**
 * The authority the user gave on screen 21. Stored with the task, never in the profile.
 * The execution layer reads only this object before every action.
 */
export type TaskAuthority = {
  taskId: Id;
  actions: AuthorityAction[];
  limits: AuthorityLimits;
  /** B "Görevi devret", A "Her işlemden önce sor". */
  condition: Condition;
  /** Set when the user taps "Yetkiyi ver ve başlat". */
  grantedAt?: IsoDateTime;
};
