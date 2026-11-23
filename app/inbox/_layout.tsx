import { Stack } from 'expo-router';
import { subScreenOptions } from '@/navigation/stackOptions';

export const unstable_settings = { initialRouteName: 'index' };

/** BM-006: inbox 29 Inbox summary, 30 Reply draft, 31 Message search. No tab bar. */
export default function Layout() {
  return (
    <Stack screenOptions={subScreenOptions}>
      <Stack.Screen name="index" options={{ title: "" }} />
      <Stack.Screen name="[messageId]/reply" options={{ title: "" }} />
      <Stack.Screen name="search" options={{ title: "" }} />
    </Stack>
  );
}
