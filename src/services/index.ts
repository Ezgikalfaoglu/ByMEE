/**
 * Service interfaces (BM-003, Berfin).
 *
 * Every external capability has an interface here and a mock in `./mock`.
 * Screens import `services` from this file and never talk to a mock directly,
 * so a real implementation can replace a mock later without touching screens.
 *
 *   import { services } from '@/services';
 *   const { data: profile, simulated } = await services.profile.getProfile();
 *
 * Every call resolves to `Result<T>`: the data plus `simulated`, which is
 * true for mocks. Screens show "Sample data" or "Simulation" when it is true.
 * A failing call rejects with `ServiceError`; show its `message` in the
 * error state with "Try again".
 */

import type {
  Action,
  Appointment,
  Approval,
  CallOutcome,
  CallResult,
  Consent,
  ConsentScope,
  Gate,
  GateStatus,
  Id,
  IsoDate,
  IsoDateTime,
  Knot,
  Offer,
  Option,
  Preference,
  PreferenceCategory,
  ResearchRequest,
  Task,
  TaskStatus,
  UserProfile,
} from '@/types/models';
import type { ServiceName } from './mockConfig';
import { mockActionService } from './mock/actions.mock';
import { mockBookingService } from './mock/booking.mock';
import { mockCalendarService } from './mock/calendar.mock';
import { mockCallService } from './mock/calls.mock';
import { mockConsentService } from './mock/consent.mock';
import { mockOfferService } from './mock/offers.mock';
import { mockPreferenceService } from './mock/preferences.mock';
import { mockProfileService } from './mock/profile.mock';
import { mockResearchService } from './mock/research.mock';
import { mockTaskService } from './mock/tasks.mock';

export type { ServiceName } from './mockConfig';
export { failNextCall, mockConfig, resetMockConfig, setMockDelay } from './mockConfig';

/** What every service call returns. */
export type Result<T> = {
  data: T;
  /** true when the data comes from a mock. Screens show "Sample data" / "Simulation". */
  simulated: boolean;
};

export { ServiceError, isServiceError } from './errors';

// ---------------------------------------------------------------------------
// Personal intelligence (Melike)
// ---------------------------------------------------------------------------

export interface ProfileService {
  getProfile(): Promise<Result<UserProfile>>;
  updateProfile(patch: Partial<Omit<UserProfile, 'id' | 'createdAt'>>): Promise<Result<UserProfile>>;
}

export interface PreferenceService {
  /** Other modules read preferences only through this (BM-018). */
  getPreferences(category?: PreferenceCategory): Promise<Result<Preference[]>>;
  savePreference(preference: Preference): Promise<Result<Preference>>;
  removePreference(id: Id): Promise<Result<void>>;
}

export interface ConsentService {
  getConsents(): Promise<Result<Consent[]>>;
  /** Other modules call this before reading personal data (BM-012). */
  isAllowed(scope: ConsentScope): Promise<boolean>;
  setAllowed(scope: ConsentScope, allowed: boolean): Promise<Result<Consent>>;
}

// ---------------------------------------------------------------------------
// Research and tasks (Eda)
// ---------------------------------------------------------------------------

export type ResearchStep = { name: 'found' | 'budget check' | 'details check' | 'ranking'; done: boolean; count?: number };

export type ResearchProgress = {
  requestId: Id;
  /** 0 to 100 */
  percent: number;
  secondsLeft: number;
  steps: ResearchStep[];
};

export interface ResearchService {
  createRequest(
    input: Omit<ResearchRequest, 'id' | 'status' | 'createdAt'>,
  ): Promise<Result<ResearchRequest>>;
  getProgress(requestId: Id): Promise<Result<ResearchProgress>>;
  /** Ranked options; empty when nothing matched (screen 11 "I couldn't find a good match."). */
  getOptions(requestId: Id): Promise<Result<Option[]>>;
}

export interface TaskService {
  listTasks(): Promise<Result<Task[]>>;
  getTask(taskId: Id): Promise<Result<Task>>;
  updateStatus(taskId: Id, status: TaskStatus): Promise<Result<Task>>;
  /** Adds a knot to the task Thread (receipts come from BM-022 this way). */
  addKnot(taskId: Id, knot: Omit<Knot, 'id'>): Promise<Result<Task>>;
  getGate(gateId: Id): Promise<Result<Gate>>;
  closeGate(gateId: Id, status: Exclude<GateStatus, 'open'>): Promise<Result<Gate>>;
}

// ---------------------------------------------------------------------------
// Assistant and actions (Berfin)
// ---------------------------------------------------------------------------

export interface ActionService {
  getAction(actionId: Id): Promise<Result<Action>>;
  /** "Change details" on 19 (BM-021). After a change the user must approve again. */
  updateLimits(
    actionId: Id,
    patch: Partial<Pick<Action, 'limits' | 'mayShare' | 'scope'>>,
  ): Promise<Result<Action>>;
  /** "Approve this call" → saved with time and the exact details. */
  approve(actionId: Id): Promise<Result<Approval>>;
  /** "Not now" → the gate stays on the Thread as "Not approved". */
  decline(actionId: Id): Promise<Result<Action>>;
  /** null when there is no valid approval (the guard then opens 19 with "Please approve this first."). */
  getApproval(actionId: Id): Promise<Result<Approval | null>>;
}

export interface CallService {
  /**
   * Starts the simulated call. `script` picks one of the scripted outcomes
   * (BM-025: offer, information only, refused, no answer, dropped); default is "offer".
   * The caller checks the approval with the gate guard (BM-022) first.
   */
  startCall(actionId: Id, script?: CallOutcome): Promise<Result<CallResult>>;
  getCallResult(callResultId: Id): Promise<Result<CallResult>>;
  /** The user edits a fact on 21 → its status becomes "edited". */
  updateFact(callResultId: Id, factId: Id, detail: string): Promise<Result<CallResult>>;
}

export interface OfferService {
  getOffer(offerId: Id): Promise<Result<Offer>>;
  /** Rejects with ServiceError when the offer is above the approved maximum or expired. */
  acceptOffer(offerId: Id, maxPrice?: number): Promise<Result<Offer>>;
  declineOffer(offerId: Id): Promise<Result<Offer>>;
}

export type CalendarEvent = {
  id: Id;
  title: string;
  start: IsoDateTime;
  end: IsoDateTime;
  detail?: string;
};

/** A time ByMEE suggests on screen 23. */
export type Slot = {
  id: Id;
  title: string;
  place: string;
  start: IsoDateTime;
  end: IsoDateTime;
  walkMinutes: number;
  /** Suggested first. */
  recommended: boolean;
  /** Set when the slot overlaps an event: "This clashes with {event}." */
  clashesWith?: string;
  /** e.g. "A reminder at 17:45 gives you time to walk over." */
  reminderLine?: string;
};

export interface CalendarService {
  /** false when the "Calendar availability" toggle is off → "Calendar is off. Pick a time yourself." */
  isConnected(): Promise<boolean>;
  getDay(date: IsoDate): Promise<Result<CalendarEvent[]>>;
  /** Slots respect time preferences, studio times and walk time + 10 min (BM-035). */
  getSlots(date: IsoDate, options?: { offerId?: Id }): Promise<Result<Slot[]>>;
}

export interface BookingService {
  /** Needs approval first ("Book this class?"). */
  book(slotId: Id, taskId: Id, offerId?: Id): Promise<Result<Appointment>>;
  getAppointment(appointmentId: Id): Promise<Result<Appointment>>;
  changeTime(appointmentId: Id, slotId: Id): Promise<Result<Appointment>>;
  cancel(appointmentId: Id): Promise<Result<Appointment>>;
}

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

export type Services = {
  profile: ProfileService;
  preferences: PreferenceService;
  consent: ConsentService;
  research: ResearchService;
  tasks: TaskService;
  actions: ActionService;
  calls: CallService;
  offers: OfferService;
  calendar: CalendarService;
  booking: BookingService;
};

/**
 * The one object screens use. All mocks in the MVP.
 * Period 2: put the real implementation here for the services whose
 * `mockConfig.useMocks[name]` is false.
 */
export const services: Services = {
  profile: mockProfileService,
  preferences: mockPreferenceService,
  consent: mockConsentService,
  research: mockResearchService,
  tasks: mockTaskService,
  actions: mockActionService,
  calls: mockCallService,
  offers: mockOfferService,
  calendar: mockCalendarService,
  booking: mockBookingService,
};
