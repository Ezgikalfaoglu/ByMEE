import { Stack } from 'expo-router';
import { rootScreenOptions, subScreenOptions } from '@/navigation/stackOptions';

export const unstable_settings = { initialRouteName: 'index' };

/** BM-002: Tasks tab. 14 Task list, 15 Task details. */
export default function TasksLayout() {
  return (
    <Stack screenOptions={subScreenOptions}>
      <Stack.Screen name="index" options={rootScreenOptions} />
      <Stack.Screen name="[taskId]" options={{ title: '' }} />
    </Stack>
  );
}
