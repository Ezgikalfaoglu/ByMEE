import { Stack } from 'expo-router';
import { rootScreenOptions, subScreenOptions } from '@/navigation/stackOptions';

export const unstable_settings = { initialRouteName: 'index' };

/** BM-006: Profile tab. 11 Profile, 12 What I learned, 13 Decision twin, 14 Connected sources, 15 Rules, 16 Settings, 50 Permissions. */
export default function Layout() {
  return (
    <Stack screenOptions={subScreenOptions}>
      <Stack.Screen name="index" options={rootScreenOptions} />
      <Stack.Screen name="learned" options={{ title: "" }} />
      <Stack.Screen name="decision-twin" options={{ title: "" }} />
      <Stack.Screen name="sources" options={{ title: "" }} />
      <Stack.Screen name="rules" options={{ title: "" }} />
      <Stack.Screen name="settings" options={{ title: "" }} />
      <Stack.Screen name="permissions" options={{ title: "" }} />
    </Stack>
  );
}
