import { AppText, Screen } from '@/components';

/**
 * Temporary start screen so the project runs.
 * BM-002 (Eda) replaces this with the first-start check:
 * first start opens 01, after setup the app opens 09.
 */
export default function Index() {
  return (
    <Screen>
      <AppText variant="title">ByMEE</AppText>
      <AppText muted>The project is set up. Screens come with the Sprint 2 stories.</AppText>
    </Screen>
  );
}
