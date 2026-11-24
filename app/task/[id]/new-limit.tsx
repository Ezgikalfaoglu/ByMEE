import { ComingSoon } from '@/navigation/ComingSoon';

/** 43 · New limit (BM-057, Berfin). Figma frame: 43 · BM-057 · New limit · Berfin */
export default function NewLimitRoute() {
  return (
    <ComingSoon
      id="43"
      name="New limit"
      header
      links={[
        { label: "Set ₺700 → 37", href: "/task/demo/approve-payment" }
      ]}
    />
  );
}
