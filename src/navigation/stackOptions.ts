import { colors } from '@/theme';

/**
 * BM-002: shared header for sub screens (back arrow on iOS and Android).
 * Android's back button does the same as the arrow.
 * Screens that draw their own header later can set headerShown: false.
 */
export const subScreenOptions = {
  headerShown: true,
  headerShadowVisible: false,
  headerStyle: { backgroundColor: colors.ivory },
  headerTintColor: colors.indigo,
  headerTitleStyle: { fontFamily: 'DMSans_500Medium', color: colors.text },
  headerBackButtonDisplayMode: 'minimal' as const,
  contentStyle: { backgroundColor: colors.ivory },
};

/** Tab roots have no header; the screen draws its own title. */
export const rootScreenOptions = { headerShown: false };
