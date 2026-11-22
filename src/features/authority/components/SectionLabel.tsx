import { StyleSheet } from 'react-native';
import { AppText } from '@/components';
import { fonts } from '@/theme';

/** Small muted heading above a group, e.g. "İzinli eylemler", "Sınırlar". */
export function SectionLabel({ children }: { children: string }) {
  return (
    <AppText variant="caption" muted style={styles.label} accessibilityRole="header">
      {children}
    </AppText>
  );
}

const styles = StyleSheet.create({
  label: { fontFamily: fonts.semibold },
});
