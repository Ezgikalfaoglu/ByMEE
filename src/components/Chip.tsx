import { Pressable, StyleSheet } from 'react-native';
import { colors, radius, spacing, touchTarget } from '@/theme';
import { AppText } from './AppText';

export type ChipProps = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  disabled?: boolean;
};

/** Selectable chip, e.g. focus areas, sort options, period filters. */
export function Chip({ label, selected = false, onPress, disabled = false }: ChipProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || !onPress}
      accessibilityRole={onPress ? 'button' : 'text'}
      accessibilityLabel={label}
      accessibilityState={{ selected, disabled }}
      style={[styles.chip, selected && styles.selected, disabled && styles.disabled]}
    >
      <AppText variant="bodyStrong" color={selected ? colors.onPrimary : colors.primary}>
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    minHeight: touchTarget - 8,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.surface,
    justifyContent: 'center',
  },
  selected: { backgroundColor: colors.primary },
  disabled: { opacity: 0.5 },
});
