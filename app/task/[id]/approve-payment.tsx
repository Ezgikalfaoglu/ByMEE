import { ComingSoon } from '@/navigation/ComingSoon';

/** 37 · Payment approval (BM-030, Berfin). Figma frame: 37 · BM-030 · Payment approval · Berfin */
export default function PaymentApprovalRoute() {
  return (
    <ComingSoon
      id="37"
      name="Payment approval"
      header
      links={[
        { label: "Slide to pay → 44", href: "/task/demo/result" },
        { label: "Over limit → 43", href: "/task/demo/new-limit" }
      ]}
    />
  );
}
