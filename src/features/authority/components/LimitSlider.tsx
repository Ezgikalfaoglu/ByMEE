import { useRef, useState } from 'react';
import {
  PanResponder,
  StyleSheet,
  View,
  type AccessibilityActionEvent,
  type LayoutChangeEvent,
} from 'react-native';
import { AppText } from '@/components';
import { colors, fonts, spacing } from '@/theme';

export type LimitSliderProps = {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  /** Exact label on the left, e.g. "Drag to change". */
  label: string;
  /** Shown on the right of the label and at both ends, e.g. "₺5.000". */
  format: (value: number) => string;
  /** Screen-reader value, e.g. "5,000 lira". */
  spoken: (value: number) => string;
};

const KNOB = 22;
const TRACK = 8;

/**
 * "Track with an indigo fill and a round knob; shows the current value on the right of its label"
 * (1.1 Element types). Drag or tap anywhere on the track; the value snaps to `step`.
 * Screen readers adjust it with the increment / decrement actions.
 */
export function LimitSlider({ value, min, max, step, onChange, label, format, spoken }: LimitSliderProps) {
  const [width, setWidth] = useState(0);
  const latest = useRef({ value, min, max, step, width, onChange });
  latest.current = { value, min, max, step, width, onChange };

  const snap = (raw: number) => {
    const { min: lo, max: hi, step: st } = latest.current;
    const stepped = Math.round(raw / st) * st;
    return Math.min(hi, Math.max(lo, stepped));
  };

  const valueAt = (x: number) => {
    const { min: lo, max: hi, width: w } = latest.current;
    if (w <= 0) return latest.current.value;
    const ratio = Math.min(1, Math.max(0, x / w));
    return snap(lo + ratio * (hi - lo));
  };

  const responder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (event) => latest.current.onChange(valueAt(event.nativeEvent.locationX)),
      onPanResponderMove: (event) => latest.current.onChange(valueAt(event.nativeEvent.locationX)),
    }),
  ).current;

  const onLayout = (event: LayoutChangeEvent) => setWidth(event.nativeEvent.layout.width);

  const onAccessibilityAction = (event: AccessibilityActionEvent) => {
    const { actionName } = event.nativeEvent;
    if (actionName === 'increment') onChange(snap(value + step));
    if (actionName === 'decrement') onChange(snap(value - step));
  };

  const ratio = max > min ? (value - min) / (max - min) : 0;
  const knobLeft = Math.max(0, ratio * width - KNOB / 2);

  return (
    <View style={styles.wrap}>
      <View style={styles.labelRow}>
        <AppText style={styles.label}>{label}</AppText>
        <AppText color={colors.primary} style={styles.value}>
          {format(value)}
        </AppText>
      </View>
      <View
        {...responder.panHandlers}
        onLayout={onLayout}
        style={styles.track}
        accessible
        accessibilityRole="adjustable"
        accessibilityLabel={label}
        accessibilityValue={{ min, max, now: value, text: spoken(value) }}
        accessibilityActions={[{ name: 'increment' }, { name: 'decrement' }]}
        onAccessibilityAction={onAccessibilityAction}
      >
        <View style={styles.rail} />
        <View style={[styles.fill, { width: Math.max(0, ratio * width) }]} />
        <View style={[styles.knob, { left: knobLeft }]} />
      </View>
      <View style={styles.ends}>
        <AppText variant="caption" muted style={styles.end}>
          {format(min)}
        </AppText>
        <AppText variant="caption" muted style={styles.end}>
          {format(max)}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: spacing.sm },
  labelRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  label: { flex: 1, fontFamily: fonts.semibold, fontSize: 14, lineHeight: 20 },
  value: { fontFamily: fonts.bold, fontSize: 13, lineHeight: 18 },
  track: { height: KNOB, justifyContent: 'center' },
  rail: { position: 'absolute', left: 0, right: 0, height: TRACK, borderRadius: TRACK / 2, backgroundColor: colors.line },
  fill: { position: 'absolute', left: 0, height: TRACK, borderRadius: TRACK / 2, backgroundColor: colors.nightSoft },
  knob: {
    position: 'absolute',
    width: KNOB,
    height: KNOB,
    borderRadius: KNOB / 2,
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.nightSoft,
  },
  ends: { flexDirection: 'row', justifyContent: 'space-between' },
  end: { fontSize: 11, lineHeight: 15, fontFamily: fonts.medium },
});
