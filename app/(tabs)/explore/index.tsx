import { ComingSoon } from '@/navigation/ComingSoon';

/** 10 · Research request (BM-008, Eda) */
export default function ResearchRequestRoute() {
  return (
    <ComingSoon
      id="10"
      name="Research request"
      tabBar
      links={[{ label: 'Start search → 11', href: '/explore/progress' }]}
    />
  );
}
