import { Stack } from 'expo-router';
import { rootScreenOptions, subScreenOptions } from '@/navigation/stackOptions';

export const unstable_settings = { initialRouteName: 'index' };

/**
 * BM-002: Profile tab. 03 Profile, 04 Connected data, 05 Permissions,
 * 06 Spending, 07 Digital twin, plus Edit profile (BM-011) and Delete my data (BM-039).
 */
export default function ProfileLayout() {
  return (
    <Stack screenOptions={subScreenOptions}>
      <Stack.Screen name="index" options={rootScreenOptions} />
      <Stack.Screen name="edit" options={{ title: '' }} />
      <Stack.Screen name="connected-data" options={{ title: '' }} />
      <Stack.Screen name="permissions" options={{ title: '' }} />
      <Stack.Screen name="spending" options={{ title: '' }} />
      <Stack.Screen name="digital-twin" options={{ title: '' }} />
      <Stack.Screen name="delete-data" options={{ title: '' }} />
    </Stack>
  );
}
