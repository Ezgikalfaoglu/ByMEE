import { Stack } from 'expo-router';
import { subScreenOptions } from '@/navigation/stackOptions';

/** BM-006: task flow, no tab bar. Screens 12–18 (Eda) and 21–26 (Berfin). */
export default function TaskLayout() {
  return <Stack screenOptions={{ ...subScreenOptions, title: '' }} />;
}
