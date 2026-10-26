/**
 * Sample data for the mocks (BM-003). Persona: Elif, Çankaya, Ankara.
 * Everything here is labelled "Sample data" or "Simulation" on screen.
 *
 * The demo story (BM-041): Elif wants a Pilates studio near home within her
 * budget → ByMEE researches → shortlists The Form Room → calls for an offer →
 * ₺3.600 becomes ₺3.240 for 3 months → books Tuesday 27 October, 18:30.
 *
 * Mocks mutate these objects in memory; "Reset demo data" (BM-004) reloads them.
 */

import type {
  Action,
  Appointment,
  Approval,
  CallFact,
  CallOutcome,
  CallResult,
  Consent,
  Gate,
  Knot,
  Offer,
  Option,
  Preference,
  ResearchRequest,
  Task,
  TranscriptLine,
  UserProfile,
} from '@/types/models';
import type { CalendarEvent, Slot } from '@/services';

export const TIME_ZONE = 'Europe/Istanbul';
/** The demo day: Tuesday 27 October 2026. */
export const DEMO_DATE = '2026-10-27';

export const profile: UserProfile = {
  id: 'user-elif',
  firstName: 'Elif',
  lastName: 'Kaya',
  email: 'elif@example.com',
  neighbourhood: 'Çankaya',
  city: 'Ankara',
  timeZone: TIME_ZONE,
  focusAreas: ['wellbeing', 'more-free-time'],
  setupStepsDone: 5,
  createdAt: '2026-10-20T09:00:00+03:00',
};

export const preferences: Preference[] = [
  { id: 'pref-time', category: 'time', label: 'Weekday evenings after 18:00', value: 'weekday-evening', source: 'told', strength: 'nice', isActive: true, updatedAt: '2026-10-20T09:05:00+03:00' },
  { id: 'pref-place', category: 'place', label: 'Within 15 minutes’ walk of home', value: 'walk-15', source: 'told', strength: 'must', isActive: true, updatedAt: '2026-10-20T09:05:00+03:00' },
  { id: 'pref-budget', category: 'budget', label: 'Up to ₺3.400 a month for classes', value: '3400', source: 'told', strength: 'must', isActive: true, updatedAt: '2026-10-20T09:05:00+03:00' },
  { id: 'pref-level', category: 'other', label: 'Beginner level', value: 'beginner', source: 'noticed', strength: 'nice', isActive: true, updatedAt: '2026-10-22T19:10:00+03:00' },
];

export const consents: Consent[] = [
  { scope: 'calendar', allowed: true, updatedAt: '2026-10-20T09:08:00+03:00' },
  { scope: 'spending', allowed: true, updatedAt: '2026-10-20T09:08:00+03:00' },
  { scope: 'notifications', allowed: true, updatedAt: '2026-10-20T09:08:00+03:00' },
  { scope: 'location', allowed: false, updatedAt: '2026-10-20T09:08:00+03:00' },
];

export const researchRequest: ResearchRequest = {
  id: 'req-pilates',
  text: 'A beginner Pilates studio close to home, weekday evenings, under ₺3.400 a month',
  category: 'pilates studio',
  area: 'Çankaya, Ankara · within 15 min walk',
  budgetMin: 2000,
  budgetMax: 3400,
  priorities: ['Close to home', 'Evening classes', 'Beginner friendly'],
  status: 'done',
  createdAt: '2026-10-26T09:12:00+03:00',
};

export const options: Option[] = [
  { id: 'opt-form-room', requestId: 'req-pilates', name: 'The Form Room', walkMinutes: 8, rating: 4.8, pricePerMonth: 3600, matchPercent: 92, address: 'Tunalı Hilmi Cad. 14, Çankaya', phone: '0312 555 01 82', pricesCheckedAt: '2026-10-26T09:20:00+03:00' },
  { id: 'opt-core', requestId: 'req-pilates', name: 'Core Studio Çankaya', walkMinutes: 12, rating: 4.6, pricePerMonth: 3200, matchPercent: 85, address: 'Bestekar Sok. 3, Çankaya', phone: '0312 555 02 44', pricesCheckedAt: '2026-10-26T09:20:00+03:00' },
  { id: 'opt-nefes', requestId: 'req-pilates', name: 'Nefes Pilates', walkMinutes: 15, rating: 4.4, pricePerMonth: 2800, matchPercent: 78, address: 'Kennedy Cad. 27, Çankaya', phone: '0312 555 03 10', pricesCheckedAt: '2026-10-26T09:20:00+03:00' },
];

export const action: Action = {
  id: 'act-call-form-room',
  taskId: 'task-pilates',
  type: 'call',
  target: { name: 'The Form Room', phone: '0312 555 01 82', area: 'Çankaya, Ankara' },
  goal: 'Ask for a new-member offer.',
  limits: { targetPrice: 3240, maxPrice: 3400 },
  mayShare: ['Your first name', 'Your preferences'],
  willNotShare: ['Your email', 'Payment details', 'Your calendar'],
  scope: 'ask',
  status: 'proposed',
  createdAt: '2026-10-26T14:20:00+03:00',
};

export const gate: Gate = {
  id: 'gate-approve-call',
  kind: 'approve',
  taskId: 'task-pilates',
  title: 'Approve a call to The Form Room',
  status: 'open',
  actionId: action.id,
  createdAt: '2026-10-26T14:20:00+03:00',
};

export const taskKnots: Knot[] = [
  { id: 'knot-1', kind: 'done', time: '2026-10-26T09:12:00+03:00', title: 'You asked for a Pilates studio near home', actor: 'You' },
  { id: 'knot-2', kind: 'done', time: '2026-10-26T09:21:00+03:00', title: 'Researched 12 studios · 3 fit', actor: 'ByMEE', opens: '/explore/shortlist' },
  { id: 'knot-3', kind: 'done', time: '2026-10-26T13:05:00+03:00', title: 'You chose The Form Room', actor: 'You', opens: '/explore/comparison' },
  { id: 'knot-4', kind: 'gate', time: '2026-10-26T14:20:00+03:00', title: 'Approve a call to The Form Room', gateId: gate.id, opens: '/gate/approve' },
];

export const task: Task = {
  id: 'task-pilates',
  title: 'Pilates near home',
  brief: researchRequest.text,
  status: 'Needs you',
  stepsDone: 3,
  stepsTotal: 6,
  nextStep: 'Approve the call',
  requestId: researchRequest.id,
  knots: taskKnots,
  gateId: gate.id,
  createdAt: '2026-10-26T09:12:00+03:00',
  updatedAt: '2026-10-26T14:20:00+03:00',
};

/** Approvals are created at runtime; none at start. */
export const approvals: Approval[] = [];

const bymee = (atSeconds: number, text: string): TranscriptLine => ({ speaker: 'ByMEE', atSeconds, text });
const other = (atSeconds: number, text: string): TranscriptLine => ({ speaker: 'other', atSeconds, text });

/** First ByMEE line is always this (BM-025). */
export const CALL_INTRO = (firstName: string) => `Hi, I’m ByMEE, an AI assistant calling for ${firstName}.`;

const offerFacts: CallFact[] = [
  { id: 'fact-price', kind: 'price', label: '₺3.240/month for 3 months', detail: 'Was ₺3.600 · back to ₺3.600 after', status: 'confirmed' },
  { id: 'fact-fee', kind: 'fee', label: 'No joining fee', detail: 'Normally ₺750', status: 'confirmed' },
  { id: 'fact-cancel', kind: 'cancellation', label: 'Flexible cancellation', detail: 'Not said in the call', status: 'not-confirmed' },
  { id: 'fact-next', kind: 'next-step', label: 'Tuesday 18:30 beginner class', detail: '3 places left on 27 October', status: 'confirmed' },
];

/** One scripted call per outcome (BM-025 rule: offer, information only, refused, no answer, dropped). */
export const callScripts: Record<CallOutcome, Omit<CallResult, 'id' | 'actionId' | 'endedAt'>> = {
  offer: {
    outcome: 'offer',
    durationSeconds: 192,
    transcript: [
      bymee(4, CALL_INTRO('Elif')),
      bymee(12, 'Elif is looking for two evening classes a week. Is there a new-member offer?'),
      other(80, 'We can offer 10% off for the first three months, with no joining fee.'),
      bymee(94, 'Thank you. Is there a beginner class on a weekday evening?'),
      other(125, 'Tuesday at 18:30 with Deniz. There are three places left on 27 October.'),
      bymee(170, 'I’ll pass that on to Elif. She’ll confirm before anything is booked.'),
    ],
    facts: offerFacts,
    summary: 'Offer received: ₺3.240/month',
    nextStep: 'Selin suggested Tuesday’s 18:30 beginner class. Next: review the offer, then pick a time.',
    savingTotal: 1080,
    offerId: 'offer-form-room',
  },
  'information-only': {
    outcome: 'information-only',
    durationSeconds: 96,
    transcript: [
      bymee(4, CALL_INTRO('Elif')),
      bymee(12, 'Elif is looking for two evening classes a week. Is there a new-member offer?'),
      other(40, 'Not at the moment. The plan is ₺3.600 a month for 8 classes; beginners start on Tuesdays at 18:30.'),
      bymee(80, 'Thank you, I’ll let Elif know.'),
    ],
    facts: [
      { id: 'fact-price-info', kind: 'price', label: '₺3.600/month, no discount', status: 'confirmed' },
      { id: 'fact-next-info', kind: 'next-step', label: 'Beginners start Tuesdays at 18:30', status: 'confirmed' },
    ],
    summary: 'No offer. Standard price ₺3.600/month',
    nextStep: 'You can still pick a time at the standard price, or ask ByMEE to try another studio.',
  },
  refused: {
    outcome: 'refused',
    durationSeconds: 48,
    transcript: [
      bymee(4, CALL_INTRO('Elif')),
      other(20, 'Sorry, we don’t discuss prices with assistants. Elif can call us herself.'),
      bymee(40, 'Understood, thank you.'),
    ],
    facts: [{ id: 'fact-refused', kind: 'other', label: 'The studio wants to speak to you directly', status: 'confirmed' }],
    summary: 'The studio asked to speak with you directly',
    nextStep: 'ByMEE can prepare the questions for your own call.',
  },
  'no-answer': {
    outcome: 'no-answer',
    durationSeconds: 45,
    transcript: [],
    facts: [],
    summary: 'No one answered.',
    nextStep: 'Try again later or pick another studio.',
  },
  dropped: {
    outcome: 'dropped',
    durationSeconds: 31,
    transcript: [bymee(4, CALL_INTRO('Elif')), other(18, 'Hello? I can’t hear you very well…')],
    facts: [],
    summary: 'The call dropped before anything was agreed.',
    nextStep: 'Try again.',
  },
  failed: {
    outcome: 'failed',
    durationSeconds: 0,
    transcript: [],
    facts: [],
    summary: 'The call didn’t go through.',
    nextStep: 'Try again.',
  },
};

export const offer: Offer = {
  id: 'offer-form-room',
  callResultId: 'call-form-room',
  provider: { name: 'The Form Room', person: 'Selin, studio manager' },
  price: 3240,
  wasPrice: 3600,
  months: 3,
  classesPerMonth: 8,
  joiningFee: 0,
  usualJoiningFee: 750,
  cancellationNoticeDays: 30,
  priceAfter: 3600,
  validUntil: '2026-10-30T23:59:00+03:00',
  savingTotal: 1080,
  status: 'open',
};

export const calendarEvents: Record<string, CalendarEvent[]> = {
  [DEMO_DATE]: [
    { id: 'ev-work', title: 'Finish up at work', start: '2026-10-27T17:00:00+03:00', end: '2026-10-27T18:00:00+03:00', detail: 'Calendar is clear after 18:00' },
  ],
  '2026-10-29': [
    { id: 'ev-dinner', title: 'Dinner with Ayşe', start: '2026-10-29T20:00:00+03:00', end: '2026-10-29T22:00:00+03:00' },
  ],
};

export const slots: Slot[] = [
  { id: 'slot-tue-1830', title: 'Beginner Pilates', place: 'The Form Room', start: '2026-10-27T18:30:00+03:00', end: '2026-10-27T19:20:00+03:00', walkMinutes: 8, recommended: true, reminderLine: 'A reminder at 17:45 gives you time to walk over.' },
  { id: 'slot-tue-1730', title: 'Beginner Pilates', place: 'The Form Room', start: '2026-10-27T17:30:00+03:00', end: '2026-10-27T18:20:00+03:00', walkMinutes: 8, recommended: false, clashesWith: 'Finish up at work' },
  { id: 'slot-thu-1900', title: 'Beginner Pilates', place: 'The Form Room', start: '2026-10-29T19:00:00+03:00', end: '2026-10-29T19:50:00+03:00', walkMinutes: 8, recommended: false, reminderLine: 'A reminder at 18:15 gives you time to walk over.' },
  { id: 'slot-sat-1000', title: 'Beginner Pilates', place: 'The Form Room', start: '2026-10-31T10:00:00+03:00', end: '2026-10-31T10:50:00+03:00', walkMinutes: 8, recommended: false, reminderLine: 'A reminder at 09:15 gives you time to walk over.' },
];

/** Created when the user books; this is the shape BM-036 shows. */
export const appointmentTemplate: Omit<Appointment, 'id' | 'start' | 'end' | 'arriveBy' | 'reminderAt'> = {
  taskId: task.id,
  offerId: offer.id,
  title: 'Beginner Pilates',
  provider: { name: 'The Form Room', teacher: 'Deniz', address: 'Tunalı Hilmi Cad. 14, Çankaya' },
  timeZone: TIME_ZONE,
  walkMinutes: 8,
  price: 3240,
  confirmationCode: 'FR-2710',
  status: 'scheduled',
};
