import { colors, fonts } from '@/theme';

/**
 * BM-006: shared header for sub screens (back arrow on iOS and Android).
 * Android's back button does the same as the arrow.
 * Screens that draw their own header later can set headerShown: false.
 */
export const subScreenOptions = {
  headerShown: true,
  headerShadowVisible: false,
  headerStyle: { backgroundColor: colors.bg },
  headerTintColor: colors.primary,
  headerTitleStyle: { fontFamily: fonts.medium, color: colors.ink },
  headerBackButtonDisplayMode: 'minimal' as const,
  contentStyle: { backgroundColor: colors.bg },
};

/** Tab roots have no header; the screen draws its own title. */
export const rootScreenOptions = { headerShown: false };
