import { Ionicons } from '@expo/vector-icons';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '@/components';
import { colors, fonts, spacing } from '@/theme';
import { BeemyMascot, type MascotMood } from './BeemyMascot';

export type IndigoPanelProps = {
  /** Small white title next to the back button, e.g. "Antalya trip". */
  title: string;
  /** Big white heading, e.g. "How much can I do on my own?". */
  heading: string;
  mood: MascotMood;
  backLabel: string;
  onBack: () => void;
  children?: ReactNode;
};

/**
 * "Colour panel": the indigo (nightSoft) block at the top of task screens with rounded
 * bottom corners (44), a round back button on 16% white, the task title, the heading
 * and the mascot in its mood colour. Covers the status bar area too.
 */
export function IndigoPanel({ title, heading, mood, backLabel, onBack, children }: IndigoPanelProps) {
  return (
    <SafeAreaView edges={['top']} style={styles.panel}>
      <View style={[styles.glow, styles.glowRight]} />
      <View style={[styles.glow, styles.glowLeft]} />
      <View style={styles.topRow}>
        <Pressable
          onPress={onBack}
          accessibilityRole="button"
          accessibilityLabel={backLabel}
          hitSlop={8}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={20} color={colors.surface} />
        </Pressable>
        <AppText color={colors.surface} style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
      </View>
      <View style={styles.headingRow}>
        <AppText color={colors.surface} style={styles.heading} accessibilityRole="header">
          {heading}
        </AppText>
        <BeemyMascot mood={mood} />
      </View>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: colors.nightSoft,
    borderBottomLeftRadius: 44,
    borderBottomRightRadius: 44,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl + spacing.lg,
    overflow: 'hidden',
  },
  glow: { position: 'absolute', borderRadius: 999, backgroundColor: colors.violet, opacity: 0.18 },
  glowRight: { width: 320, height: 320, top: -50, left: 170 },
  glowLeft: { width: 220, height: 220, top: 60, left: -120 },
  topRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm + 4, paddingTop: spacing.sm + 4, marginLeft: -spacing.xs },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.16)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontFamily: fonts.bold, fontSize: 16, lineHeight: 22, flex: 1 },
  headingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: spacing.md, marginTop: spacing.lg },
  heading: { fontFamily: fonts.bold, fontSize: 30, lineHeight: 34, letterSpacing: -0.6, flex: 1, maxWidth: 220 },
});
