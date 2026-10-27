import { ComingSoon } from '@/navigation/ComingSoon';

/** 21 · Conversation analysis (BM-030, Berfin) */
export default function CallSummaryRoute() {
  return (
    <ComingSoon
      id="21"
      name="Call summary"
      header
      links={[{ label: 'See offer → 22', href: '/gate/offer' }]}
    />
  );
}
