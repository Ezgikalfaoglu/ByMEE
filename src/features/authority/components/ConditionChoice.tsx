import { Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '@/components';
import { colors, fonts, spacing } from '@/theme';
import type { Condition } from '@/types/common';
import { authorityTexts as t } from '../data/authority.texts';

export type ConditionChoiceProps = {
  value: Condition;
  onChange: (condition: Condition) => void;
};

const options: { value: Condition; label: string }[] = [
  { value: 'B', label: t.delegate },
  { value: 'A', label: t.askBeforeEach },
];

/** "Görevi devret" (condition B) or "Her işlemden önce sor" (condition A). */
export function ConditionChoice({ value, onChange }: ConditionChoiceProps) {
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
              variant="caption"
              color={selected ? colors.onPrimary : colors.muted}
              style={[styles.text, selected && styles.textSelected]}
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
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 14,
    padding: spacing.xs,
  },
  option: {
    flex: 1,
    minHeight: 40,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm + 2,
    borderRadius: 11,
    justifyContent: 'center',
  },
  selected: { backgroundColor: colors.primary },
  text: { fontSize: 13, lineHeight: 17, fontFamily: fonts.semibold },
  textSelected: { fontFamily: fonts.bold },
});
