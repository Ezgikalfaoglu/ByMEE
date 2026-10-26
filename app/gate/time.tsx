import { ComingSoon } from '@/navigation/ComingSoon';

/** 23 · Pick a time (BM-035, Berfin) */
export default function TimeRoute() {
  return (
    <ComingSoon
      id="23"
      name="Pick a time"
      header
      links={[{ label: 'Book Tuesday at 18:30 → 24', href: '/gate/booked' }]}
    />
  );
}
