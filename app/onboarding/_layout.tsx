import { Stack } from 'expo-router';
import { rootScreenOptions, subScreenOptions } from '@/navigation/stackOptions';

export const unstable_settings = { initialRouteName: 'index' };

/** BM-006: onboarding 01 Welcome, 02 Language, 07 Permissions and data sources, 08 Voice introduction. No tab bar; 01 and 08 draw their own header. */
export default function Layout() {
  return (
    <Stack screenOptions={subScreenOptions}>
      <Stack.Screen name="index" options={rootScreenOptions} />
      <Stack.Screen name="language" options={{ title: "" }} />
      <Stack.Screen name="permissions" options={{ title: "" }} />
      <Stack.Screen name="about-you" options={rootScreenOptions} />
    </Stack>
  );
}
