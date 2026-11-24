/** Display helpers for screen 35. Money is shown as "₺5.000" in both languages (rule 1.3). */

import type { Money } from '@/types/common';
import { formatMoney } from '@/utils/formatMoney';

/** "₺5.000" for the big limit value, the slider value and the slider ends. */
export function formatLimit(amount: Money): string {
  return formatMoney(amount);
}

/** Screen-reader text for the slider: "5,000 lira" (doc: Accessibility). */
export function formatLiraSpoken(amount: Money): string {
  const digits = formatMoney(amount).replace('₺', '').replace(/\./g, ',');
  return `${digits} lira`;
}
