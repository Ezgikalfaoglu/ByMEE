import { ComingSoon } from '@/navigation/ComingSoon';

/** 36 · Approval before action (BM-021, Berfin). Figma frame: 36 · BM-021 · Approval before action · Berfin */
export default function ApprovalBeforeActionRoute() {
  return (
    <ComingSoon
      id="36"
      name="Approval before action"
      header
      links={[
        { label: "Approve and send → 44", href: "/task/demo/result" },
        { label: "Change → 21", href: "/task/demo/summary" }
      ]}
    />
  );
}
