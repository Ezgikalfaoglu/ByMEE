import { Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '@/components';
import { colors, fonts, spacing } from '@/theme';

export type SegmentedOption<T extends string> = { value: T; label: string };

export type SegmentedControlProps<T extends string> = {
  options: SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
};

/** "Row of 2–4 options in a white pill; selected option is indigo with white text" (1.1 Element types). */
export function SegmentedControl<T extends string>({ options, value, onChange }: SegmentedControlProps<T>) {
  return (
    <View style={styles.group} accessibilityRole="radiogroup">
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <Pressable
            key={option.value}
            onPress={() => onChange(option.value)}
            accessibilityRole="radio"
            accessibilityLabel={option.label}
            accessibilityState={{ checked: selected, selected }}
            style={[styles.option, selected && styles.selected]}
          >
            <AppText
              center
              color={selected ? colors.onPrimary : colors.muted}
              style={[styles.text, selected && styles.textSelected]}
              numberOfLines={1}
            >
              {option.label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    flexDirection: 'row',
    gap: spacing.xs,
    backgroundColor: colors.surface,
    borderRadius: 22,
    padding: spacing.xs,
  },
  option: {
    flex: 1,
    minHeight: 36,
    paddingHorizontal: spacing.sm,
    paddingVertical: 9,
    borderRadius: 18,
    justifyContent: 'center',
  },
  selected: { backgroundColor: colors.nightSoft },
  text: { fontSize: 13, lineHeight: 18, fontFamily: fonts.semibold },
  textSelected: { fontFamily: fonts.bold },
});
