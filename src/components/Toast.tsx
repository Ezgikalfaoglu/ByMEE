import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, radius, spacing } from '@/theme';
import { AppText } from './AppText';

type ToastOptions = {
  /** Optional action, e.g. "Undo" for a dismissed alert. */
  actionLabel?: string;
  onAction?: () => void;
  /** Milliseconds. Default 3000; use 5000 when there is an "Undo". */
  duration?: number;
};

type ToastState = ToastOptions & { message: string; id: number };

const ToastContext = createContext<((message: string, options?: ToastOptions) => void) | null>(null);

/** Wrap the app once (app/_layout.tsx). */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastState | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const insets = useSafeAreaInsets();

  const show = useCallback((message: string, options: ToastOptions = {}) => {
    if (timer.current) clearTimeout(timer.current);
    const id = Date.now();
    setToast({ message, id, ...options });
    timer.current = setTimeout(
      () => setToast((t) => (t?.id === id ? null : t)),
      options.duration ?? (options.actionLabel ? 5000 : 3000),
    );
  }, []);

  const value = useMemo(() => show, [show]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toast ? (
        <View
          pointerEvents="box-none"
          style={[styles.host, { bottom: insets.bottom + spacing.xl }]}
        >
          <View style={styles.toast} accessibilityLiveRegion="polite" accessibilityRole="alert">
            <AppText color={colors.white} style={styles.message}>
              {toast.message}
            </AppText>
            {toast.actionLabel ? (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={toast.actionLabel}
                hitSlop={8}
                onPress={() => {
                  toast.onAction?.();
                  setToast(null);
                }}
              >
                <AppText variant="bodyStrong" color={colors.blush}>
                  {toast.actionLabel}
                </AppText>
              </Pressable>
            ) : null}
          </View>
        </View>
      ) : null}
    </ToastContext.Provider>
  );
}

/** const toast = useToast(); toast("Your profile is ready."); */
export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
  return ctx;
}

const styles = StyleSheet.create({
  host: { position: 'absolute', left: spacing.screen, right: spacing.screen },
  toast: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.deepIndigo,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 4,
  },
  message: { flex: 1 },
});
