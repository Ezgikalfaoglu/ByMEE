import { formatAmountCap, formatShareable, formatValidUntil } from './format';

describe('screen 21 formatting', () => {
  it('writes the valid-until moment like the Figma frame', () => {
    // Local time on purpose: the device shows its own clock.
    expect(formatValidUntil('2026-11-27T23:59:00')).toBe('27 Kas Cuma 23.59');
    expect(formatValidUntil('2027-01-04T09:05:00')).toBe('4 Oca Pazartesi 09.05');
  });

  it('is empty for an unreadable date', () => {
    expect(formatValidUntil('yarın')).toBe('');
  });

  it('writes the amount cap with TL after the number', () => {
    expect(formatAmountCap(0)).toBe('0 TL');
    expect(formatAmountCap(3600)).toBe('3.600 TL');
    expect(formatAmountCap(12.5)).toBe('12,50 TL');
  });

  it('joins shareable items with a middle dot', () => {
    expect(formatShareable(['CV_en.pdf', 'e-posta'])).toBe('CV_en.pdf · e-posta');
    expect(formatShareable([])).toBe('');
  });
});
