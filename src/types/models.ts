/**
 * Shared data contracts (BM-003, Berfin).
 *
 * These are the types that more than one feature uses. Each feature keeps its
 * own extra types in its `types.ts`. If a contract here changes, all three
 * modules are affected, so changes go through a PR that Melike, Eda and Berfin
 * approve.
 *
 * Conventions
 * - Dates and times are ISO 8601 strings (e.g. "2026-10-27T18:30:00+03:00").
 * - Money is a plain number in Turkish lira (TRY). Show it with formatMoney().
 * - Everything a mock service returns is marked `simulated: true` by the
 *   service wrapper (see `src/services`). Screens show "Sample data" or
 *   "Simulation" when that flag is set.
 */

export type Id = string;
/** ISO 8601 date-time string, e.g. "2026-10-27T18:30:00+03:00". */
export type IsoDateTime = string;
/** ISO 8601 date string, e.g. "2026-10-27". */
export type IsoDate = string;
/** Amount in Turkish lira (TRY). Whole lira in the MVP. */
export type Money = number;

/** Which screen a knot or gate opens. Matches the route table in the GitHub setup tab. */
export type ScreenRoute =
  | '/home'
  | '/explore'
  | '/explore/progress'
  | '/explore/shortlist'
  | '/explore/matrix'
  | '/explore/comparison'
  | '/tasks'
  | '/tasks/[taskId]'
  | '/assistant'
  | '/assistant/voice'
  | '/gate/approve'
  | '/gate/call'
  | '/gate/call-summary'
  | '/gate/offer'
  | '/gate/time'
  | '/gate/booked'
  | '/profile'
  | '/profile/connected-data'
  | '/profile/permissions'
  | '/profile/digital-twin'
  | '/home/alerts';

// ---------------------------------------------------------------------------
// Personal intelligence (Melike)
// ---------------------------------------------------------------------------

/** Focus chips chosen on screen 02. */
export type FocusArea = 'wellbeing' | 'more-free-time' | 'travel' | 'mindful-spending';

export interface UserProfile {
  id: Id;
  firstName: string;
  lastName?: string;
  email: string;
  /** e.g. "Çankaya" */
  neighbourhood: string;
  /** e.g. "Ankara" */
  city: string;
  /** IANA time zone, e.g. "Europe/Istanbul". */
  timeZone: string;
  focusAreas: FocusArea[];
  /** How many of the 5 setup steps are done (screen 03 shows "{n} of 5 done"). */
  setupStepsDone: number;
  createdAt: IsoDateTime;
}

export type PreferenceCategory = 'time' | 'place' | 'budget' | 'other';

/** "You told me" = explicit, "ByMEE noticed" = inferred (always soft). */
export type PreferenceSource = 'told' | 'noticed';

export interface Preference {
  id: Id;
  category: PreferenceCategory;
  /** Plain words, e.g. "Weekday evenings after 18:00". */
  label: string;
  /** Machine-readable value, e.g. "weekday-evening" or "3600". */
  value: string;
  source: PreferenceSource;
  /** "must" shows the tag "Must have" (hard limit). "noticed" is never "must". */
  strength: 'must' | 'nice';
  isActive: boolean;
  updatedAt: IsoDateTime;
}

/** The four toggles on screen 05. Calls, bookings and payments always need approval and are not a scope. */
export type ConsentScope = 'calendar' | 'spending' | 'notifications' | 'location';

export interface Consent {
  scope: ConsentScope;
  allowed: boolean;
  updatedAt: IsoDateTime;
}

// ---------------------------------------------------------------------------
// Research and tasks (Eda)
// ---------------------------------------------------------------------------

export type ResearchStatus = 'draft' | 'running' | 'done' | 'failed' | 'no-results';

export interface ResearchRequest {
  id: Id;
  /** What the user typed (10 to 300 characters). */
  text: string;
  /** e.g. "pilates studio"; undefined until known. */
  category?: string;
  /** e.g. "Çankaya, Ankara · within 15 min walk" */
  area: string;
  budgetMin: Money;
  budgetMax: Money;
  /** 1 to 5 priority chips. */
  priorities: string[];
  status: ResearchStatus;
  createdAt: IsoDateTime;
}

/** One place or provider found by research; shown on 12, 13 and 16. */
export interface Option {
  id: Id;
  requestId: Id;
  name: string;
  walkMinutes: number;
  /** 0 to 5 */
  rating: number;
  pricePerMonth: Money;
  /** 0 to 100 */
  matchPercent: number;
  address?: string;
  phone?: string;
  /** Shown as "Prices checked {date}". */
  pricesCheckedAt: IsoDateTime;
}

/** Status names are fixed by BM-020. */
export type TaskStatus =
  | 'Draft'
  | 'Researching'
  | 'Needs you'
  | 'Waiting for approval'
  | 'In progress'
  | 'Scheduled'
  | 'Done'
  | 'Failed'
  | 'Paused'
  | 'Cancelled';

export interface Task {
  id: Id;
  title: string;
  /** What the user asked for. */
  brief: string;
  status: TaskStatus;
  stepsDone: number;
  stepsTotal: number;
  nextStep?: string;
  requestId?: Id;
  /** The task Thread (screen 15): steps, gates and receipts in time order. */
  knots: Knot[];
  /** Open gate, if the task waits for the user. */
  gateId?: Id;
  createdAt: IsoDateTime;
  updatedAt: IsoDateTime;
}

// ---------------------------------------------------------------------------
// The Thread
// ---------------------------------------------------------------------------

/**
 * Knot types from the Design direction tab:
 * ○ event · ● working · ◆ gate · ✓ done · ▭ receipt · ┊ later
 */
export type KnotKind = 'event' | 'working' | 'gate' | 'done' | 'receipt' | 'later';

export interface Knot {
  id: Id;
  kind: KnotKind;
  time: IsoDateTime;
  /** e.g. "18:30 Beginner Pilates" or "Researching Pilates · 75%" */
  title: string;
  detail?: string;
  taskId?: Id;
  gateId?: Id;
  /** Where a tap goes. */
  opens?: ScreenRoute;
  /** Who caused it, for receipts and logs. */
  actor?: 'You' | 'ByMEE';
}

/** Which gate screen a gate opens. */
export type GateKind = 'shortlist' | 'approve' | 'offer' | 'time' | 'comparison';

export type GateStatus = 'open' | 'approved' | 'not-approved' | 'expired';

/** A decision point. Gates are the only place that uses Blush. */
export interface Gate {
  id: Id;
  kind: GateKind;
  taskId: Id;
  /** e.g. "Approve a call to The Form Room" */
  title: string;
  status: GateStatus;
  /** The action behind an "approve" gate. */
  actionId?: Id;
  createdAt: IsoDateTime;
  closedAt?: IsoDateTime;
}

// ---------------------------------------------------------------------------
// Assistant and actions (Berfin)
// ---------------------------------------------------------------------------

/** Things that always come to a gate (requirements rule 2). */
export type ActionType = 'call' | 'email' | 'booking' | 'accept-offer' | 'share-data' | 'payment';

export type ActionStatus =
  | 'proposed'
  | 'approved'
  | 'running'
  | 'done'
  | 'failed'
  | 'cancelled'
  | 'not-approved';

/** What ByMEE wants to do. Shown on screen 19. */
export interface Action {
  id: Id;
  taskId: Id;
  type: ActionType;
  /** Who ByMEE contacts. */
  target: { name: string; phone?: string; area?: string };
  /** e.g. "Ask for a new-member offer." */
  goal: string;
  limits: {
    /** Target price per month in TRY. */
    targetPrice?: Money;
    /** Highest price the user accepts. ByMEE never accepts above this. */
    maxPrice?: Money;
  };
  /** "ByMEE may share" list, e.g. ["Your first name", "Your preferences"]. */
  mayShare: string[];
  /** "ByMEE will not share" list, e.g. ["Your email", "Payment details", "Your calendar"]. */
  willNotShare: string[];
  /** "Only ask" or "Ask and hold a trial class" (BM-021). */
  scope: 'ask' | 'ask-and-hold';
  status: ActionStatus;
  createdAt: IsoDateTime;
}

/**
 * The user's OK for one action. One approval = one action.
 * The guard (BM-022) runs an action only if the approval matches the details,
 * is under 24 hours old and consent allows it.
 */
export interface Approval {
  id: Id;
  actionId: Id;
  approvedAt: IsoDateTime;
  /** approvedAt + 24 h */
  expiresAt: IsoDateTime;
  /** Hash of the action details at approval time; a change needs a new approval. */
  detailsHash: string;
}

export type CallOutcome = 'offer' | 'information-only' | 'refused' | 'no-answer' | 'dropped' | 'failed';

export interface TranscriptLine {
  speaker: 'ByMEE' | 'other';
  /** Seconds from the start of the call, shown as mm:ss. */
  atSeconds: number;
  text: string;
}

/** A fact from the call, tagged "Confirmed", "Not confirmed" or "Edited by you" (BM-030). */
export interface CallFact {
  id: Id;
  kind: 'price' | 'fee' | 'cancellation' | 'next-step' | 'other';
  label: string;
  detail?: string;
  status: 'confirmed' | 'not-confirmed' | 'edited';
}

/** Result of a (simulated) call. Shown on 20 and 21. */
export interface CallResult {
  id: Id;
  actionId: Id;
  outcome: CallOutcome;
  durationSeconds: number;
  transcript: TranscriptLine[];
  facts: CallFact[];
  /** One line, e.g. "Offer received: ₺3.240/month". */
  summary: string;
  /** ByMEE's note on the next step. */
  nextStep?: string;
  /** Saving in TRY over the offer period, if there is an offer. */
  savingTotal?: Money;
  /** Set when the call produced an offer. */
  offerId?: Id;
  endedAt: IsoDateTime;
}

export type OfferStatus = 'open' | 'accepted' | 'declined' | 'expired';

/** The offer from the other side. Shown on screen 22. */
export interface Offer {
  id: Id;
  callResultId: Id;
  provider: { name: string; person?: string };
  /** New price per month. */
  price: Money;
  /** Old price per month (shown struck through). */
  wasPrice: Money;
  /** How many months the new price lasts. */
  months: number;
  classesPerMonth?: number;
  /** 0 when there is no joining fee. */
  joiningFee: Money;
  usualJoiningFee?: Money;
  cancellationNoticeDays: number;
  /** Price per month after the offer period. */
  priceAfter: Money;
  validUntil: IsoDateTime;
  /** (wasPrice - price) × months */
  savingTotal: Money;
  status: OfferStatus;
}

export type AppointmentStatus = 'scheduled' | 'done' | 'cancelled';

/** The booking. Shown on screen 24 and as a ○ knot on the Thread. */
export interface Appointment {
  id: Id;
  taskId: Id;
  offerId?: Id;
  /** e.g. "Beginner Pilates" */
  title: string;
  provider: { name: string; teacher?: string; address: string };
  start: IsoDateTime;
  end: IsoDateTime;
  timeZone: string;
  walkMinutes: number;
  /** When to leave home, e.g. 10 min before start. */
  arriveBy: IsoDateTime;
  reminderAt: IsoDateTime;
  price: Money;
  /** e.g. "FR-2710" */
  confirmationCode: string;
  status: AppointmentStatus;
}
