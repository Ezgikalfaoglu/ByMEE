import { Stack } from 'expo-router';
import { rootScreenOptions, subScreenOptions } from '@/navigation/stackOptions';

/**
 * BM-002: onboarding 01 and 02. No tab bar.
 * 01 has no back arrow; Android back on 01 closes the app.
 */
export default function OnboardingLayout() {
  return (
    <Stack screenOptions={subScreenOptions}>
      <Stack.Screen name="index" options={rootScreenOptions} />
      <Stack.Screen name="profile-setup" options={{ title: '' }} />
    </Stack>
  );
}
