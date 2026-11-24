/**
 * Texts of screen 35 Authority setup (BM-013). i18n keys: authority.*
 *
 * Quoted texts are the exact English UI text from the story. BM-006 (Eda) adds
 * src/i18n/en.json and tr.json; these keys move there unchanged and this file
 * becomes a thin lookup, so the screen does not change.
 * The last three lines are the standard messages from "1.2 Standard messages".
 */
export const authorityTexts = {
  back: 'Back',
  heading: 'How much can I do on my own?',

  limitLabel: 'Spending limit per action',
  drag: 'Drag to change',
  limitZeroNote: 'Beemy will ask before every action.',

  autoBook: 'Book under the limit without asking',
  shareContact: 'Share my phone and email',
  shareContactHint: 'Only with the hotel',
  payWithSavedCard: 'Pay with my saved card',
  payWithSavedCardHint: 'I always ask first',

  validFor: 'Valid for',
  thisTask: 'This task',
  sevenDays: '7 days',
  always: 'Always',

  save: 'Save permissions',

  loading: 'Loading…',
  loadError: "Couldn't load this. Try again.",
  retry: 'Try again',
  actionFailed: "That didn't work. Nothing was changed.",
} as const;
