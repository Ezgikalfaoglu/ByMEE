import { StyleSheet, View } from 'react-native';
import { colors, fonts, radius, spacing } from '@/theme';
import { AppText } from './AppText';

export type TagTone = 'neutral' | 'info' | 'waiting' | 'question' | 'success' | 'danger';

export type TagProps = {
  /** e.g. "Simülasyon · sentetik veri", "Seni bekliyor", "Tamamlandı". */
  label: string;
  tone?: TagTone;
};

/** Small read-only label. "waiting" and "question" are only for things waiting for the user. */
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
  neutral: { bg: colors.bg, fg: colors.muted },
  info: { bg: colors.infoSoft, fg: colors.info },
  waiting: { bg: colors.warnSoft, fg: colors.warn },
  question: { bg: colors.amberSoft, fg: colors.amber },
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
