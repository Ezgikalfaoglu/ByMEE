import { Stack } from 'expo-router';
import { rootScreenOptions, subScreenOptions } from '@/navigation/stackOptions';

export const unstable_settings = { initialRouteName: 'index' };

/** BM-006: Home tab. 09 Home, 10 For you. */
export default function Layout() {
  return (
    <Stack screenOptions={subScreenOptions}>
      <Stack.Screen name="index" options={rootScreenOptions} />
      <Stack.Screen name="for-you" options={{ title: "" }} />
    </Stack>
  );
}
