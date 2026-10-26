import { ComingSoon } from '@/navigation/ComingSoon';

/** 12 · Shortlist (BM-019, Eda) */
export default function ShortlistRoute() {
  return (
    <ComingSoon
      id="12"
      name="Shortlist"
      header
      tabBar
      links={[{ label: 'Compare selected → 13', href: '/explore/matrix' }]}
    />
  );
}
