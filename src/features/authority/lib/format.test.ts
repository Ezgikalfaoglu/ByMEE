import { formatLimit, formatLiraSpoken } from './format';

describe('screen 35 formatting', () => {
  it('shows the limit as ₺5.000 (Turkish thousand dot in both languages)', () => {
    expect(formatLimit(5000)).toBe('₺5.000');
    expect(formatLimit(0)).toBe('₺0');
    expect(formatLimit(10000)).toBe('₺10.000');
  });

  it('reads the limit aloud as "5,000 lira"', () => {
    expect(formatLiraSpoken(5000)).toBe('5,000 lira');
    expect(formatLiraSpoken(0)).toBe('0 lira');
    expect(formatLiraSpoken(10000)).toBe('10,000 lira');
  });
});
