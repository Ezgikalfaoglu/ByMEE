import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors, spacing } from '@/theme';
import { AppText } from './AppText';
import { Button } from './Button';

export type StateViewProps =
  | { state: 'loading'; message?: string }
  | { state: 'empty'; message: string; actionLabel?: string; onAction?: () => void }
  | { state: 'error'; message?: string; actionLabel?: string; onAction?: () => void };

/**
 * Loading, empty and error states. Every screen needs all three
 * (Definition of Done). Use the exact texts from the story.
 */
export function StateView(props: StateViewProps) {
  if (props.state === 'loading') {
    return (
      <View style={styles.wrap} accessibilityRole="progressbar" accessibilityLabel={props.message ?? 'Loading'}>
        <ActivityIndicator size="large" color={colors.indigo} />
        {props.message ? (
          <AppText muted center>
            {props.message}
          </AppText>
        ) : null}
      </View>
    );
  }

  const message =
    props.state === 'error' ? props.message ?? 'Something went wrong.' : props.message;
  const actionLabel = props.state === 'error' ? props.actionLabel ?? 'Try again' : props.actionLabel;

  return (
    <View style={styles.wrap}>
      <AppText
        center
        color={props.state === 'error' ? colors.danger : colors.text}
        accessibilityLiveRegion="polite"
      >
        {message}
      </AppText>
      {actionLabel && props.onAction ? (
        <Button label={actionLabel} onPress={props.onAction} variant="secondary" fullWidth={false} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
    padding: spacing.lg,
  },
});
