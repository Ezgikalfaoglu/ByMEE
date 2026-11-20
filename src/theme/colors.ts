/**
 * Beemy colours. Same tokens as the Figma variable collection "Beemy renkler"
 * (page "Beemy — Görev Devri ekranları (v3)").
 *
 * - primary: Beemy and main actions
 * - warn / amber: Beemy is waiting for the user (approval, question)
 * - success: done, verified
 * - danger: blocked, errors
 * - info: information
 * Each colour has a soft version for backgrounds.
 */
export const colors = {
  bg: '#F6F5FB',
  surface: '#FFFFFF',
  ink: '#1B1530',
  muted: '#6B6880',
  line: '#E7E4F0',
  onPrimary: '#FFFFFF',

  primary: '#4B3FD6',
  primarySoft: '#EEEBFF',
  success: '#1E9E63',
  successSoft: '#E4F6ED',
  warn: '#E07A12',
  warnSoft: '#FFF1E2',
  amber: '#B98204',
  amberSoft: '#FFF5D6',
  danger: '#D23C68',
  dangerSoft: '#FDE8EF',
  info: '#2F7FE0',
  infoSoft: '#E6F0FD',

  disabled: '#B8B5C8',
} as const;

export type ColorName = keyof typeof colors;
