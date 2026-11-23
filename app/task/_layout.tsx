import { Stack } from 'expo-router';
import { subScreenOptions } from '@/navigation/stackOptions';

/** BM-006: task flow, no tab bar. Berfin 21–23, 35–44 and Eda 24–26, 28. 39 Voice question draws its own header. */
export default function TaskLayout() {
  return (
    <Stack screenOptions={{ ...subScreenOptions, title: '' }}>
      <Stack.Screen name="[id]/question" options={{ headerShown: false, presentation: 'fullScreenModal' }} />
      <Stack.Screen name="[id]/approve" options={{ presentation: 'formSheet' }} />
    </Stack>
  );
}
