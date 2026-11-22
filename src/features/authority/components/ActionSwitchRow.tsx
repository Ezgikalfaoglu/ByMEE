import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Switch, View } from 'react-native';
import { AppText } from '@/components';
import { colors, spacing } from '@/theme';

export type ActionSwitchRowProps = {
  /** Exact action text, e.g. "Ödeme yap". Also the switch's accessibility label. */
  label: string;
  enabled: boolean;
  /** Sensitive action: lock icon, muted label, off by default. The user can still turn it on. */
  locked?: boolean;
  onChange: (enabled: boolean) => void;
};

/** One row of the "İzinli eylemler" card. */
export function ActionSwitchRow({ label, enabled, locked = false, onChange }: ActionSwitchRowProps) {
  return (
    <View style={styles.row}>
      {locked ? <Ionicons name="lock-closed-outline" size={16} color={colors.muted} /> : null}
      <AppText variant="bodyStrong" color={locked ? colors.muted : colors.ink} style={styles.label}>
        {label}
      </AppText>
      <Switch
        value={enabled}
        onValueChange={onChange}
        accessibilityLabel={label}
        accessibilityState={{ checked: enabled }}
        trackColor={{ false: colors.line, true: colors.primary }}
        thumbColor={colors.surface}
        ios_backgroundColor={colors.line}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm + 2, minHeight: 32 },
  label: { flex: 1 },
});
