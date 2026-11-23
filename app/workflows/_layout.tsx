import { Stack } from 'expo-router';
import { rootScreenOptions, subScreenOptions } from '@/navigation/stackOptions';

export const unstable_settings = { initialRouteName: 'index' };

/** BM-006: workflows 47 Workflow discovery, 48 Teach by showing (own header), 49 Learned workflows. No tab bar. */
export default function Layout() {
  return (
    <Stack screenOptions={subScreenOptions}>
      <Stack.Screen name="index" options={{ title: "" }} />
      <Stack.Screen name="discover" options={{ title: "" }} />
      <Stack.Screen name="teach" options={rootScreenOptions} />
    </Stack>
  );
}
