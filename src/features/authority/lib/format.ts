/** Display helpers for the Sınırlar card on screen 21. */

import type { IsoDateTime, Money } from '@/types/common';
import { formatMoney } from '@/utils/formatMoney';

const MONTHS = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
const DAYS = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

/** "27 Kas Cuma 23.59", in the device's local time. Empty for an unreadable date. */
export function formatValidUntil(iso: IsoDateTime): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  const hh = date.getHours().toString().padStart(2, '0');
  const mm = date.getMinutes().toString().padStart(2, '0');
  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${DAYS[date.getDay()]} ${hh}.${mm}`;
}

/** "0 TL", "3.600 TL": the Figma frame writes the cap with "TL" after the number. */
export function formatAmountCap(amount: Money): string {
  return `${formatMoney(amount).replace('₺', '')} TL`;
}

/** "CV_en.pdf · e-posta" */
export function formatShareable(items: string[]): string {
  return items.join(' · ');
}
