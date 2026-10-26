import { StyleSheet, TextInput, View, type TextInputProps } from 'react-native';
import { colors, fonts, radius, spacing, touchTarget } from '@/theme';
import { AppText } from './AppText';

export type TextFieldProps = Omit<TextInputProps, 'style'> & {
  /** Exact field label from the story, e.g. "Name". */
  label: string;
  /** Exact error message from the story, e.g. "Please enter your name." */
  error?: string;
  hint?: string;
};

export function TextField({ label, error, hint, multiline, ...rest }: TextFieldProps) {
  return (
    <View style={styles.wrap}>
      <AppText variant="bodyStrong">{label}</AppText>
      <TextInput
        {...rest}
        multiline={multiline}
        accessibilityLabel={label}
        placeholderTextColor={colors.textMuted}
        style={[styles.input, multiline && styles.multiline, error ? styles.inputError : null]}
      />
      {error ? (
        <AppText variant="caption" color={colors.danger} accessibilityLiveRegion="polite">
          {error}
        </AppText>
      ) : hint ? (
        <AppText variant="caption" muted>
          {hint}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: spacing.xs },
  input: {
    minHeight: touchTarget + 4,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontFamily: fonts.regular,
    fontSize: 15,
    color: colors.text,
  },
  multiline: { minHeight: 100, textAlignVertical: 'top' },
  inputError: { borderColor: colors.danger },
});
