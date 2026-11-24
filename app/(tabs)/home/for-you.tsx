import { ComingSoon } from '@/navigation/ComingSoon';

/** 10 · For you (BM-049, Melike). Figma frame: 10 · BM-049 · For you · Melike */
export default function ForYouRoute() {
  return (
    <ComingSoon
      id="10"
      name="For you"
      header
      links={[
        { label: "Book it → 37", href: "/task/demo/approve-payment" }
      ]}
    />
  );
}
