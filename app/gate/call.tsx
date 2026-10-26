import { ComingSoon } from '@/navigation/ComingSoon';

/** 20 · Call simulation (BM-025, Berfin) */
export default function CallRoute() {
  return (
    <ComingSoon
      id="20"
      name="Call"
      header
      links={[{ label: 'Call ends → 21', href: '/gate/call-summary' }]}
    />
  );
}
