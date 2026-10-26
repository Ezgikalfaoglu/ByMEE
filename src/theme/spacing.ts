/** 8 px grid. Screens use 20 px side padding. */
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  screen: 20,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  card: 16,
  pill: 999,
} as const;

/** Minimum size of anything the user can tap. */
export const touchTarget = 44;
