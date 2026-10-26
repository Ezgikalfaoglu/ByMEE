import { ActivityIndicator, Pressable, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, radius, spacing, touchTarget } from '@/theme';
import { AppText } from './AppText';

export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'danger';

export type ButtonProps = {
  /** Exact button text from the story ("Must keep"). */
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  accessibilityHint?: string;
  style?: StyleProp<ViewStyle>;
};

export function Button({
  label,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  fullWidth = true,
  accessibilityHint,
  style,
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const v = variants[variant];

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      style={({ pressed }) => [
        styles.base,
        v.container,
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        pressed && !isDisabled && styles.pressed,
        style,
      ]}
    >
      <View style={styles.row}>
        {loading ? <ActivityIndicator color={v.textColor} style={styles.spinner} /> : null}
        <AppText variant="button" color={isDisabled && variant === 'text' ? colors.disabled : v.textColor}>
          {label}
        </AppText>
      </View>
    </Pressable>
  );
}

const variants: Record<ButtonVariant, { container: ViewStyle; textColor: string }> = {
  primary: { container: { backgroundColor: colors.indigo }, textColor: colors.textOnIndigo },
  secondary: {
    container: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.indigo },
    textColor: colors.indigo,
  },
  text: { container: { backgroundColor: 'transparent' }, textColor: colors.indigo },
  danger: { container: { backgroundColor: colors.danger }, textColor: colors.white },
};

const styles = StyleSheet.create({
  base: {
    minHeight: Math.max(touchTarget, 48),
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: { alignSelf: 'stretch' },
  row: { flexDirection: 'row', alignItems: 'center' },
  spinner: { marginRight: spacing.sm },
  disabled: { opacity: 0.5 },
  pressed: { opacity: 0.85 },
});
