/**
 * Types that only src/features/authority uses (BM-013, Berfin).
 *
 * AuthorityRule follows the data model in the User Stories doc (1.4 Data models):
 * id, taskId | null, limitPerAction (TRY), autoBook, shareContact (+ recipients),
 * payWithSavedCard (always ask), validFor ('task' | '7d' | 'always'), expiresAt.
 */

import type { Id, IsoDateTime, Money } from '@/types/common';

/** "Valid for" on screen 35: This task / 7 days / Always. */
export type ValidFor = 'task' | '7d' | 'always';

/** The rule the user saves on screen 35. The execution layer reads only this before a binding action. */
export type AuthorityRule = {
  id: Id;
  /** null = a global rule (BM-072). Screen 35 always saves for one task. */
  taskId: Id | null;
  /** Highest amount of one action that Beemy may do on its own. 0 = ask before every action. */
  limitPerAction: Money;
  /** "Book under the limit without asking". Condition A ignores it and always asks. */
  autoBook: boolean;
  /** "Share my phone and email", only with `shareRecipients`. */
  shareContact: boolean;
  shareRecipients: string[];
  /** "Pay with my saved card". On still means Beemy asks before every payment; off means the card is never used. */
  payWithSavedCard: boolean;
  validFor: ValidFor;
  /** End of task / +7 days / null for Always. */
  expiresAt: IsoDateTime | null;
  /** Set by saveRule. */
  savedAt?: IsoDateTime;
};

/** What screen 35 needs to know about the task (from the task definition, BM-004). */
export type AuthorityTask = {
  id: Id;
  /** Shown in the header, e.g. "Antalya trip". */
  title: string;
  /** Who contact details may be shared with, e.g. ["hotel"]. */
  shareRecipients: string[];
  /** Used as expiresAt for "This task"; null when the task has no end yet. */
  endsAt: IsoDateTime | null;
};

/** What the execution layer decides for one proposed action. */
export type Decision = 'auto' | 'needs_approval' | 'blocked';
