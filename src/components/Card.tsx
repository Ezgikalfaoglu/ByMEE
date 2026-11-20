import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, radius, spacing } from '@/theme';

export type CardProps = {
  children: ReactNode;
  onPress?: () => void;
  /** Read by screen readers when the card is tappable. */
  accessibilityLabel?: string;
  /** "waiting" is only for things Beemy needs the user to decide (approval, question). */
  tone?: 'default' | 'info' | 'waiting';
  style?: StyleProp<ViewStyle>;
};

export function Card({ children, onPress, accessibilityLabel, tone = 'default', style }: CardProps) {
  const toneStyle = tone === 'waiting' ? styles.waiting : tone === 'info' ? styles.info : null;

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
    borderColor: colors.line,
    padding: spacing.md,
    gap: spacing.sm,
  },
  info: { backgroundColor: colors.infoSoft, borderColor: colors.infoSoft },
  waiting: { backgroundColor: colors.warnSoft, borderColor: colors.warn },
  pressed: { opacity: 0.9 },
});
