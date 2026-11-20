import { AppText, Screen } from '@/components';

/**
 * Temporary start screen so the project runs.
 * BM-006 (Eda) replaces this with the first-start check:
 * first start opens 01 Welcome, after setup the app opens 03 My tasks.
 */
export default function Index() {
  return (
    <Screen>
      <AppText variant="title">Beemy</AppText>
      <AppText muted>Proje kuruldu. Ekranlar sprint hikâyeleriyle gelecek.</AppText>
    </Screen>
  );
}
