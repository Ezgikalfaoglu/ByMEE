import { Stack } from 'expo-router';
import { subScreenOptions } from '@/navigation/stackOptions';

/** BM-006: task flow, no tab bar. Eda 21–26, 28 and Berfin 35–44. 39 Voice question draws its own header. */
export default function TaskLayout() {
  return (
    <Stack screenOptions={{ ...subScreenOptions, title: '' }}>
      <Stack.Screen name="[id]/question" options={{ headerShown: false, presentation: 'fullScreenModal' }} />
      <Stack.Screen name="[id]/approve" options={{ presentation: 'formSheet' }} />
    </Stack>
  );
}
