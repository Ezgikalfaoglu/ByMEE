import { ComingSoon } from '@/navigation/ComingSoon';

/** 19 · Gate: review and approve (BM-016, Berfin) */
export default function ApproveRoute() {
  return (
    <ComingSoon
      id="19"
      name="Approve"
      header
      links={[{ label: 'Approve this call → 20', href: '/gate/call' }]}
    />
  );
}
