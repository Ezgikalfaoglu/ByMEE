import { Text, type TextProps } from 'react-native';
import { colors, typography, type TypographyVariant } from '@/theme';

export type AppTextProps = TextProps & {
  variant?: TypographyVariant;
  color?: string;
  muted?: boolean;
  center?: boolean;
};

/** Use this instead of <Text> so every screen uses DM Sans and the same sizes. */
export function AppText({
  variant = 'body',
  color,
  muted = false,
  center = false,
  style,
  ...rest
}: AppTextProps) {
  return (
    <Text
      {...rest}
      style={[
        typography[variant],
        { color: color ?? (muted ? colors.textMuted : colors.text) },
        center && { textAlign: 'center' },
        style,
      ]}
    />
  );
}
