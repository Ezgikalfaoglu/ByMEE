import { Stack } from 'expo-router';
import { subScreenOptions } from '@/navigation/stackOptions';

/** BM-006: 19 Type mode, no tab bar. */
export default function ChatLayout() {
  return <Stack screenOptions={{ ...subScreenOptions, title: '' }} />;
}
