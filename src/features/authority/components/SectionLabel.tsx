import { StyleSheet } from 'react-native';
import { AppText } from '@/components';
import { fonts } from '@/theme';

/** Small muted heading above a group, e.g. "Spending limit per action", "Valid for". */
export function SectionLabel({ children, size = 13 }: { children: string; size?: 12 | 13 }) {
  return (
    <AppText variant="caption" muted style={[styles.label, { fontSize: size, lineHeight: size + 5 }]}>
      {children}
    </AppText>
  );
}

const styles = StyleSheet.create({
  label: { fontFamily: fonts.semibold },
});
