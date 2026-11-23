import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import type { ComponentProps } from 'react';
import { colors, fonts } from '@/theme';

type IconName = ComponentProps<typeof Ionicons>['name'];

// Expo Router passes color as a ColorValue (can be null), so it is narrowed here.
const icon =
  (name: IconName) =>
  ({ color, size }: { color: unknown; size: number }) => (
    <Ionicons name={name} color={typeof color === 'string' ? color : undefined} size={size} />
  );

/**
 * BM-006: four tabs (Figma component "Sekme çubuğu"): Home → 09, Tasks → 20, Log → 45, Profile → 11.
 * Labels come from en.json / tr.json once the text files are in. Voice is not a tab:
 * the mic on Home (09) and the "+" on My tasks (20) open 18 Voice assistant.
 * Each tab folder has its own Stack, so tapping the active tab again returns to its first screen.
 */
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.nightSoft,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.line },
        tabBarLabelStyle: { fontFamily: fonts.medium, fontSize: 11 },
      }}
    >
      <Tabs.Screen name="home" options={{ title: 'Home', tabBarIcon: icon('home-outline') }} />
      <Tabs.Screen name="tasks" options={{ title: 'Tasks', tabBarIcon: icon('list-outline') }} />
      <Tabs.Screen name="log" options={{ title: 'Log', tabBarIcon: icon('document-text-outline') }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: icon('person-outline') }} />
    </Tabs>
  );
}
