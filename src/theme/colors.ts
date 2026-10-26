/**
 * ByMEE colours. Each colour has one meaning (see "Design rules" in the
 * Design direction tab of the ByMEE User Stories doc).
 *
 * - indigo: ByMEE and main actions
 * - blush:  gates only (ByMEE is waiting for the user)
 * - softBlue: information
 * - ivory: background
 * - danger: errors (never use blush for errors)
 */
export const colors = {
  indigo: '#2E4A7D',
  deepIndigo: '#1F2E4D',
  blush: '#F6CDBD',
  softBlue: '#DCE6F1',
  ivory: '#FCF9F6',
  white: '#FFFFFF',

  /** Text */
  text: '#1F2E4D',
  textMuted: '#4A5670',
  textOnIndigo: '#FFFFFF',

  /** Lines and surfaces */
  border: '#DADDE3',
  surface: '#FFFFFF',
  surfaceMuted: '#F3F1EE',

  /** States */
  danger: '#B42318',
  dangerSoft: '#FDECEA',
  success: '#2E7D4F',
  successSoft: '#E6F4EC',
  disabled: '#B8BFCC',
} as const;

export type ColorName = keyof typeof colors;
