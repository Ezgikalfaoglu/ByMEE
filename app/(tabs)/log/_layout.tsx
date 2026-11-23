import { Stack } from 'expo-router';
import { rootScreenOptions, subScreenOptions } from '@/navigation/stackOptions';

export const unstable_settings = { initialRouteName: 'index' };

/** BM-006: Log tab. 45 Activity log, 46 Log entry details. */
export default function Layout() {
  return (
    <Stack screenOptions={subScreenOptions}>
      <Stack.Screen name="index" options={rootScreenOptions} />
      <Stack.Screen name="[entryId]" options={{ title: "" }} />
    </Stack>
  );
}
