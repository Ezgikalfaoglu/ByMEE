import { StyleSheet, View } from 'react-native';
import { AppText } from '@/components';
import { fonts, spacing } from '@/theme';

/** "Alan satırı" from Figma: muted label on the left, value on the right. */
export function LimitRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row} accessible accessibilityLabel={`${label}: ${value}`}>
      <AppText variant="caption" muted style={styles.text}>
        {label}
      </AppText>
      <AppText variant="caption" style={[styles.text, styles.value]}>
        {value}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: spacing.md, minHeight: 24 },
  text: { fontSize: 13, lineHeight: 18 },
  value: { fontFamily: fonts.semibold, textAlign: 'right', flexShrink: 1 },
});
