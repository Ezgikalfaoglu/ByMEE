import { ComingSoon } from '@/navigation/ComingSoon';

/** 06 · Spending insights (BM-026, Melike) */
export default function SpendingRoute() {
  return (
    <ComingSoon
      id="06"
      name="Spending"
      header
      tabBar
      links={[{ label: 'Open permissions → 05', href: '/profile/permissions' }]}
    />
  );
}
