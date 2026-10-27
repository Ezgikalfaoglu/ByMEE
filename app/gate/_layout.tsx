import Ionicons from '@expo/vector-icons/Ionicons';
import { Stack, useNavigation, useRouter } from 'expo-router';
import { useCallback, useEffect } from 'react';
import { BackHandler, Pressable } from 'react-native';
import { confirm } from '@/components';
import { subScreenOptions } from '@/navigation/stackOptions';
import { colors } from '@/theme';

/**
 * BM-002: gate flow 19 → 24.
 * Opens full screen (see app/_layout.tsx), no tab bar, ✕ to leave.
 * Android back asks the same question as ✕ (to be confirmed with Ezgi).
 */
export default function GateLayout() {
  const navigation = useNavigation();
  const router = useRouter();

  const confirmLeave = useCallback(async () => {
    const stop = await confirm({
      title: 'Stop here?',
      message: 'Nothing has been approved yet.',
      confirmLabel: 'Stop',
      cancelLabel: 'Keep going',
      destructive: true,
    });
    if (!stop) return;
    // Close the whole gate flow, not only the current step.
    if (navigation.canGoBack()) navigation.goBack();
    else router.replace('/home');
  }, [navigation, router]);

  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      void confirmLeave();
      return true;
    });
    return () => sub.remove();
  }, [confirmLeave]);

  return (
    <Stack
      screenOptions={{
        ...subScreenOptions,
        title: '',
        headerBackVisible: false,
        gestureEnabled: false,
        headerRight: () => (
          <Pressable
            onPress={confirmLeave}
            accessibilityRole="button"
            accessibilityLabel="Close"
            hitSlop={12}
            style={{ minWidth: 44, minHeight: 44, alignItems: 'center', justifyContent: 'center' }}
          >
            <Ionicons name="close-outline" size={28} color={colors.indigo} />
          </Pressable>
        ),
      }}
    >
      <Stack.Screen name="approve" />
      <Stack.Screen name="call" />
      <Stack.Screen name="call-summary" />
      <Stack.Screen name="offer" />
      <Stack.Screen name="time" />
      <Stack.Screen name="booked" />
    </Stack>
  );
}
