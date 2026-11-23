import { Stack } from 'expo-router';
import { subScreenOptions } from '@/navigation/stackOptions';

/** BM-006: research mode, no tab bar. 32 Scenario library, 33 Run setup, 51 Run log, 34 A/B comparison, 17 Evaluation summary. */
export default function ResearchLayout() {
  return <Stack screenOptions={{ ...subScreenOptions, title: '' }} />;
}
