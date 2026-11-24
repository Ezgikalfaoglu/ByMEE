import { ComingSoon } from '@/navigation/ComingSoon';

/** 28 · Offers and negotiation (BM-067, Eda). Figma frame: 28 · BM-067 · Offers and negotiation · Eda */
export default function OffersAndNegotiationRoute() {
  return (
    <ComingSoon
      id="28"
      name="Offers and negotiation"
      header
      links={[
        { label: "Accept → 37", href: "/task/demo/approve-payment" }
      ]}
    />
  );
}
