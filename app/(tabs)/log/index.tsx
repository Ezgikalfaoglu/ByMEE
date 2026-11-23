import { ComingSoon } from '@/navigation/ComingSoon';

/** 45 · Activity log (BM-070, Berfin). Figma frame: 45 · BM-070 · Activity log · Berfin */
export default function ActivityLogRoute() {
  return (
    <ComingSoon
      id="45"
      name="Activity log"
      tabBar
      links={[
        { label: "Entry → 46", href: "/log/demo" },
        { label: "Routines → 47", href: "/workflows/discover" }
      ]}
    />
  );
}
