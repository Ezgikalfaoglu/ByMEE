import { ComingSoon } from '@/navigation/ComingSoon';

/** 22 · Offer review (BM-031, Berfin) */
export default function OfferRoute() {
  return (
    <ComingSoon
      id="22"
      name="Offer"
      header
      links={[{ label: 'Accept and pick a time → 23', href: '/gate/time' }]}
    />
  );
}
