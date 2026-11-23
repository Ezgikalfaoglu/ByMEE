import { ComingSoon } from '@/navigation/ComingSoon';

/** 27 · Price tracking (BM-066, Eda). Figma frame: 27 · BM-066 · Price tracking · Eda */
export default function PriceTrackingRoute() {
  return (
    <ComingSoon
      id="27"
      name="Price tracking"
      header
      links={[
        { label: "Book it → 37", href: "/task/demo/approve-payment" }
      ]}
    />
  );
}
