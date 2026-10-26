import { Redirect } from 'expo-router';

/**
 * BM-002: first-start check.
 * Rule: first start opens 01; after setup the app always opens 09.
 *
 * TODO(BM-004): read hasCompletedSetup from AppStateProvider:
 *   const { state, isHydrated } = useAppState();
 *   if (!isHydrated) return <StateView state="loading" />;
 *   return <Redirect href={state.hasCompletedSetup ? '/home' : '/onboarding'} />;
 * Until then the app always starts at 01.
 */
export default function Index() {
  return <Redirect href="/onboarding" />;
}
