import { Redirect } from 'expo-router';

/**
 * BM-006: first-start check.
 * Rule: first start opens 01 Welcome; after setup the app always opens 03 My tasks (/home).
 *
 * TODO(BM-006): read "setup completed" from storage and redirect to '/home' when it is true.
 * Until then the app always starts at 01.
 */
export default function Index() {
  return <Redirect href="/onboarding" />;
}
