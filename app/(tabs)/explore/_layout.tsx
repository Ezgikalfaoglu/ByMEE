import { Stack } from 'expo-router';
import { rootScreenOptions, subScreenOptions } from '@/navigation/stackOptions';

export const unstable_settings = { initialRouteName: 'index' };

/** BM-002: Explore tab. 10 Request, 11 Progress, 12 Shortlist, 13 Matrix, 16 Compare. */
export default function ExploreLayout() {
  return (
    <Stack screenOptions={subScreenOptions}>
      <Stack.Screen name="index" options={rootScreenOptions} />
      <Stack.Screen name="progress" options={{ title: '' }} />
      <Stack.Screen name="shortlist" options={{ title: '' }} />
      <Stack.Screen name="matrix" options={{ title: '' }} />
      <Stack.Screen name="compare" options={{ title: '' }} />
    </Stack>
  );
}
