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
 * BM-006: four tabs (Figma component "Sekme çubuğu"). Labels are "Must keep" texts.
 * Görevler → 03 My tasks, Yeni → 11 New task, Kayıtlar → 27 Audit log, Profil → 05 Profile.
 * Each tab folder has its own Stack, so tapping the active tab again returns to its first screen.
 */
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.line },
        tabBarLabelStyle: { fontFamily: fonts.medium, fontSize: 11 },
      }}
    >
      <Tabs.Screen name="home" options={{ title: 'Görevler', tabBarIcon: icon('list-outline') }} />
      <Tabs.Screen name="new" options={{ title: 'Yeni', tabBarIcon: icon('add-circle-outline') }} />
      <Tabs.Screen name="log" options={{ title: 'Kayıtlar', tabBarIcon: icon('document-text-outline') }} />
      <Tabs.Screen name="profile" options={{ title: 'Profil', tabBarIcon: icon('person-outline') }} />
    </Tabs>
  );
}
