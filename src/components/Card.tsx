import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, radius, spacing } from '@/theme';

export type CardProps = {
  children: ReactNode;
  onPress?: () => void;
  /** Read by screen readers when the card is tappable. */
  accessibilityLabel?: string;
  /** "gate" uses Blush. Use it only for things ByMEE needs the user to decide. */
  tone?: 'default' | 'info' | 'gate';
  style?: StyleProp<ViewStyle>;
};

export function Card({ children, onPress, accessibilityLabel, tone = 'default', style }: CardProps) {
  const toneStyle = tone === 'gate' ? styles.gate : tone === 'info' ? styles.info : null;

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        style={({ pressed }) => [styles.card, toneStyle, pressed && styles.pressed, style]}
      >
        {children}
      </Pressable>
    );
  }
  return <View style={[styles.card, toneStyle, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.card,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    gap: spacing.sm,
  },
  info: { backgroundColor: colors.softBlue, borderColor: colors.softBlue },
  gate: { backgroundColor: colors.blush, borderColor: colors.blush },
  pressed: { opacity: 0.9 },
});
