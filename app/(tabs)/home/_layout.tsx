import { Stack } from 'expo-router';
import { rootScreenOptions, subScreenOptions } from '@/navigation/stackOptions';

export const unstable_settings = { initialRouteName: 'index' };

/** BM-002: Home tab. 09 Home, 08 Alerts. */
export default function HomeLayout() {
  return (
    <Stack screenOptions={subScreenOptions}>
      <Stack.Screen name="index" options={rootScreenOptions} />
      <Stack.Screen name="alerts" options={{ title: 'Alerts' }} />
    </Stack>
  );
}
