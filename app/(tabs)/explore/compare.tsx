import { ComingSoon } from '@/navigation/ComingSoon';

/** 16 · Comparison (BM-034, Eda) */
export default function ComparisonRoute() {
  return (
    <ComingSoon
      id="16"
      name="Comparison"
      header
      tabBar
      links={[{ label: 'Go with The Form Room → 17', href: '/assistant' }]}
    />
  );
}
