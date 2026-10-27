import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import type { ComponentProps } from 'react';
import { colors } from '@/theme';

type IconName = ComponentProps<typeof Ionicons>['name'];

// Expo Router passes color as a ColorValue (can be null), so it is narrowed here.
const icon =
  (name: IconName) =>
  ({ color, size }: { color: unknown; size: number }) => (
    <Ionicons name={name} color={typeof color === 'string' ? color : undefined} size={size} />
  );

/**
 * BM-002: five tabs. Labels are "Must keep" texts; icons and style are free.
 * Each tab folder has its own Stack, so tapping the active tab again
 * returns to the first screen of that tab.
 */
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.indigo,
        tabBarStyle: { backgroundColor: colors.ivory },
        tabBarLabelStyle: { fontFamily: 'DMSans_500Medium', fontSize: 12 },
      }}
    >
      <Tabs.Screen name="home" options={{ title: 'Home', tabBarIcon: icon('home-outline') }} />
      <Tabs.Screen name="explore" options={{ title: 'Explore', tabBarIcon: icon('compass-outline') }} />
      <Tabs.Screen
        name="assistant"
        options={{ title: 'Assistant', tabBarIcon: icon('chatbubble-ellipses-outline') }}
      />
      <Tabs.Screen name="tasks" options={{ title: 'Tasks', tabBarIcon: icon('checkbox-outline') }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: icon('person-outline') }} />
    </Tabs>
  );
}
