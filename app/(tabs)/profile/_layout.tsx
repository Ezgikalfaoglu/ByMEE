import { Stack } from 'expo-router';
import { rootScreenOptions, subScreenOptions } from '@/navigation/stackOptions';

export const unstable_settings = { initialRouteName: 'index' };

/** BM-006: Profil tab. 05 Profile, 06 Edit verified facts, 07 My documents, 08 Preferences, 09 Settings, 29 Active permissions. */
export default function Layout() {
  return (
    <Stack screenOptions={subScreenOptions}>
      <Stack.Screen name="index" options={rootScreenOptions} />
      <Stack.Screen name="facts" options={{ title: '' }} />
      <Stack.Screen name="documents" options={{ title: '' }} />
      <Stack.Screen name="preferences" options={{ title: '' }} />
      <Stack.Screen name="settings" options={{ title: '' }} />
      <Stack.Screen name="permissions" options={{ title: '' }} />
    </Stack>
  );
}
