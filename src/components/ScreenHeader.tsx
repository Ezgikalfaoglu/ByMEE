import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors, spacing, touchTarget } from '@/theme';
import { AppText } from './AppText';

export type ScreenHeaderProps = {
  /** Plain title that says what the screen does, e.g. "Your profile". */
  title?: string;
  /** Sub screens show a back arrow. Default: go back in the stack. */
  showBack?: boolean;
  onBack?: () => void;
  /** Gate flow (19 to 24) shows ✕ instead of a back arrow. */
  onClose?: () => void;
  right?: ReactNode;
};

/** Back arrow (or ✕) and a plain title. No brand label, no screen number. */
export function ScreenHeader({ title, showBack = false, onBack, onClose, right }: ScreenHeaderProps) {
  return (
    <View style={styles.row}>
      <View style={styles.side}>
        {showBack ? (
          <IconButton icon="chevron-back" label="Back" onPress={onBack ?? (() => router.back())} />
        ) : null}
        {onClose ? <IconButton icon="close" label="Close" onPress={onClose} /> : null}
      </View>
      <AppText variant="subheading" numberOfLines={1} style={styles.title}>
        {title ?? ''}
      </AppText>
      <View style={[styles.side, styles.right]}>{right}</View>
    </View>
  );
}

function IconButton({
  icon,
  label,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={8}
      style={styles.icon}
    >
      <Ionicons name={icon} size={24} color={colors.deepIndigo} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 52,
    paddingHorizontal: spacing.sm,
  },
  side: { width: 64, flexDirection: 'row', alignItems: 'center' },
  right: { justifyContent: 'flex-end' },
  title: { flex: 1, textAlign: 'center' },
  icon: {
    width: touchTarget,
    height: touchTarget,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
