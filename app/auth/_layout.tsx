import { Stack } from 'expo-router';
import { subScreenOptions } from '@/navigation/stackOptions';

/** BM-006: account 03 Sign up, 04 Verify code, 05 Log in, 06 Forgot password. No tab bar. */
export default function Layout() {
  return (
    <Stack screenOptions={subScreenOptions}>
      <Stack.Screen name="sign-up" options={{ title: "" }} />
      <Stack.Screen name="verify" options={{ title: "" }} />
      <Stack.Screen name="log-in" options={{ title: "" }} />
      <Stack.Screen name="forgot-password" options={{ title: "" }} />
    </Stack>
  );
}
