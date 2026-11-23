import { ComingSoon } from '@/navigation/ComingSoon';

/** 38 · Data sharing approval (BM-038, Berfin). Figma frame: 38 · BM-038 · Data sharing approval · Berfin */
export default function DataSharingApprovalRoute() {
  return (
    <ComingSoon
      id="38"
      name="Data sharing approval"
      header
      links={[
        { label: "Share 3 items → 22", href: "/task/demo" }
      ]}
    />
  );
}
