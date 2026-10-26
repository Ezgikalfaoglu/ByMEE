import { ComingSoon } from '@/navigation/ComingSoon';

/** 13 · Decision matrix (BM-024, Eda) */
export default function DecisionMatrixRoute() {
  return (
    <ComingSoon
      id="13"
      name="Decision matrix"
      header
      tabBar
      links={[{ label: 'Choose The Form Room → 16', href: '/explore/compare' }]}
    />
  );
}
