import { ComingSoon } from '@/navigation/ComingSoon';

/** 11 · Research progress (BM-014, Eda) */
export default function ResearchProgressRoute() {
  return (
    <ComingSoon
      id="11"
      name="Research progress"
      header
      tabBar
      links={[
        { label: 'Done → 12', href: '/explore/shortlist', mode: 'replace' },
        { label: 'Run in background → 09', href: '/home' },
      ]}
    />
  );
}
