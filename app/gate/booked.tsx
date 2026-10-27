import { ComingSoon } from '@/navigation/ComingSoon';

/** 24 · Booking confirmation (BM-036, Berfin) */
export default function BookedRoute() {
  return (
    <ComingSoon
      id="24"
      name="Booked"
      header
      links={[{ label: 'Back to Home → 09', href: '/home', mode: 'dismissTo' }]}
    />
  );
}
