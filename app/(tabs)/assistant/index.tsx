import { ComingSoon } from '@/navigation/ComingSoon';

/** 17 · Assistant chat (BM-009, Berfin) */
export default function AssistantRoute() {
  return (
    <ComingSoon
      id="17"
      name="Assistant"
      tabBar
      links={[
        { label: 'Mic → 18', href: '/assistant/voice' },
        { label: 'Review → 19', href: '/gate/approve' },
      ]}
    />
  );
}
