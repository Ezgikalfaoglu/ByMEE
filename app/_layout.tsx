import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  useFonts,
} from '@expo-google-fonts/plus-jakarta-sans';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from '@/components';
import { colors } from '@/theme';

SplashScreen.preventAutoHideAsync();

/**
 * Root layout (project setup by Ezgi, navigation by Eda in BM-006).
 * Route list: docs/screens.md
 * - onboarding: 01, 02, 07, 08 and auth: 03–06 (no tab bar)
 * - (tabs): Home 09–10, Tasks 20, Log 45–46, Profile 11–16 and 50
 * - voice: 18 (full screen), chat/[chatId]: 19
 * - task/[id]: task flow 21–22, 35–44 (Berfin) and 24–26, 28 (Eda)
 * - agents 23, watch 27, inbox 29–31, workflows 47–49
 * - research: 17, 32–34, 51 (no tab bar)
 */
export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <SafeAreaProvider>
      <ToastProvider>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.bg },
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="onboarding" />
          <Stack.Screen name="auth" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="voice" options={{ presentation: 'fullScreenModal' }} />
          <Stack.Screen name="chat" />
          <Stack.Screen name="task" />
          <Stack.Screen name="agents" options={{ headerShown: true, title: '', headerShadowVisible: false }} />
          <Stack.Screen name="watch" options={{ headerShown: true, title: '', headerShadowVisible: false }} />
          <Stack.Screen name="inbox" />
          <Stack.Screen name="workflows" />
          <Stack.Screen name="research" />
        </Stack>
      </ToastProvider>
    </SafeAreaProvider>
  );
}
