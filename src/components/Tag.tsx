import { StyleSheet, View } from 'react-native';
import { colors, fonts, radius, spacing } from '@/theme';
import { AppText } from './AppText';

export type TagTone = 'neutral' | 'info' | 'gate' | 'success' | 'danger';

export type TagProps = {
  /** e.g. "Sample data", "Simulation", "Needs you", "Confirmed", "You told me". */
  label: string;
  tone?: TagTone;
};

/** Small read-only label. "gate" (Blush) is only for things waiting for the user. */
export function Tag({ label, tone = 'neutral' }: TagProps) {
  const t = tones[tone];
  return (
    <View style={[styles.tag, { backgroundColor: t.bg }]}>
      <AppText variant="caption" color={t.fg} style={styles.text}>
        {label}
      </AppText>
    </View>
  );
}

const tones: Record<TagTone, { bg: string; fg: string }> = {
  neutral: { bg: colors.surfaceMuted, fg: colors.deepIndigo },
  info: { bg: colors.softBlue, fg: colors.deepIndigo },
  gate: { bg: colors.blush, fg: colors.deepIndigo },
  success: { bg: colors.successSoft, fg: colors.success },
  danger: { bg: colors.dangerSoft, fg: colors.danger },
};

const styles = StyleSheet.create({
  tag: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.pill,
  },
  text: { fontFamily: fonts.medium },
});
