import { StyleSheet, Switch, View } from 'react-native';
import { AppText } from '@/components';
import { colors, fonts, spacing } from '@/theme';

export type PermissionSwitchRowProps = {
  /** Exact text, e.g. "Book under the limit without asking". Also the switch's accessibility label. */
  title: string;
  /** Exact hint, e.g. "Only with the hotel". */
  hint?: string;
  value: boolean;
  onChange: (value: boolean) => void;
  /** Draws the 1 px divider under the row. */
  divider?: boolean;
};

/** One row of the permissions card: title, optional hint and a 50 × 30 toggle (on = indigo). */
export function PermissionSwitchRow({ title, hint, value, onChange, divider = false }: PermissionSwitchRowProps) {
  return (
    <View style={[styles.row, divider && styles.divider]}>
      <View style={styles.text}>
        <AppText style={styles.title}>{title}</AppText>
        {hint ? (
          <AppText variant="caption" muted style={styles.hint}>
            {hint}
          </AppText>
        ) : null}
      </View>
      <Switch
        value={value}
        onValueChange={onChange}
        accessibilityLabel={hint ? `${title}, ${hint}` : title}
        accessibilityState={{ checked: value }}
        trackColor={{ false: colors.line, true: colors.nightSoft }}
        thumbColor={colors.surface}
        ios_backgroundColor={colors.line}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm + 4, paddingVertical: spacing.sm + 2 },
  divider: { borderBottomWidth: 1, borderBottomColor: colors.line },
  text: { flex: 1, gap: 2 },
  title: { fontFamily: fonts.semibold, fontSize: 15, lineHeight: 21 },
  hint: { fontFamily: fonts.medium, lineHeight: 17 },
});
