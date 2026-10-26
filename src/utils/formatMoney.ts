import type { Money } from '@/types/models';

/**
 * Formats an amount in Turkish lira the way the stories show it: "₺3.600".
 *
 * - Thousands are separated with a dot, as in Turkish.
 * - Whole lira by default. Kuruş are shown with a comma only when present:
 *   formatMoney(3600.5) → "₺3.600,50".
 * - Negative amounts keep the sign in front: "-₺250".
 *
 * Money is always stored as a number in TRY (see src/types/models.ts).
 */
export function formatMoney(amount: Money): string {
  if (!Number.isFinite(amount)) return '₺0';

  const sign = amount < 0 ? '-' : '';
  const abs = Math.abs(amount);
  const whole = Math.floor(abs);
  const kurus = Math.round((abs - whole) * 100);

  // Rounding kuruş can roll over to the next lira (e.g. 2.999 → 3,00).
  const wholeAdjusted = kurus === 100 ? whole + 1 : whole;
  const kurusAdjusted = kurus === 100 ? 0 : kurus;

  const wholeText = wholeAdjusted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const kurusText = kurusAdjusted > 0 ? `,${kurusAdjusted.toString().padStart(2, '0')}` : '';

  return `${sign}₺${wholeText}${kurusText}`;
}

/** "₺3.240/month" style label used on 19, 21 and 22. */
export function formatMoneyPerMonth(amount: Money): string {
  return `${formatMoney(amount)}/month`;
}
