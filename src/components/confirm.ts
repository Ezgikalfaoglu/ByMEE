import { Alert } from 'react-native';

export type ConfirmOptions = {
  /** e.g. "Discard your changes?" */
  title: string;
  message?: string;
  /** e.g. "Discard" */
  confirmLabel: string;
  /** e.g. "Keep editing" */
  cancelLabel: string;
  /** Red confirm button for delete / cancel actions. */
  destructive?: boolean;
};

/**
 * Two-button question used across the stories, e.g.
 *   if (await confirm({ title: 'Stop this search?', confirmLabel: 'Stop', cancelLabel: 'Keep searching' })) { ... }
 * Resolves true when the user taps the confirm button.
 */
export function confirm({ title, message, confirmLabel, cancelLabel, destructive = false }: ConfirmOptions) {
  return new Promise<boolean>((resolve) => {
    Alert.alert(
      title,
      message,
      [
        { text: cancelLabel, style: 'cancel', onPress: () => resolve(false) },
        { text: confirmLabel, style: destructive ? 'destructive' : 'default', onPress: () => resolve(true) },
      ],
      { cancelable: true, onDismiss: () => resolve(false) },
    );
  });
}
