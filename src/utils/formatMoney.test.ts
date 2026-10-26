import { formatMoney, formatMoneyPerMonth } from './formatMoney';

describe('formatMoney', () => {
  it('formats whole lira with a dot as thousands separator', () => {
    expect(formatMoney(3600)).toBe('₺3.600');
    expect(formatMoney(3240)).toBe('₺3.240');
    expect(formatMoney(750)).toBe('₺750');
    expect(formatMoney(0)).toBe('₺0');
  });

  it('formats millions', () => {
    expect(formatMoney(1250000)).toBe('₺1.250.000');
  });

  it('shows kuruş with a comma only when present', () => {
    expect(formatMoney(3600.5)).toBe('₺3.600,50');
    expect(formatMoney(12.05)).toBe('₺12,05');
    expect(formatMoney(2.999)).toBe('₺3');
  });

  it('keeps the sign for negative amounts', () => {
    expect(formatMoney(-250)).toBe('-₺250');
  });

  it('never throws on bad input', () => {
    expect(formatMoney(Number.NaN)).toBe('₺0');
    expect(formatMoney(Number.POSITIVE_INFINITY)).toBe('₺0');
  });

  it('adds the per-month suffix', () => {
    expect(formatMoneyPerMonth(3240)).toBe('₺3.240/month');
  });
});
