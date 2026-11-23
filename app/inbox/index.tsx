import { ComingSoon } from '@/navigation/ComingSoon';

/** 29 · Inbox summary (BM-054, Eda). Figma frame: 29 · BM-054 · Inbox summary · Eda */
export default function InboxSummaryRoute() {
  return (
    <ComingSoon
      id="29"
      name="Inbox summary"
      header
      links={[
        { label: "Reply draft → 30", href: "/inbox/demo/reply" },
        { label: "Search → 31", href: "/inbox/search" }
      ]}
    />
  );
}
