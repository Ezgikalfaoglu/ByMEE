import { Stack } from 'expo-router';
import { subScreenOptions } from '@/navigation/stackOptions';

/** BM-006: research mode, no tab bar. 19 Scenario library, 20 Run setup, 30 Run log, 10 Evaluation summary. */
export default function ResearchLayout() {
  return <Stack screenOptions={{ ...subScreenOptions, title: '' }} />;
}
