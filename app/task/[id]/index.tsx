import { ComingSoon } from '@/navigation/ComingSoon';

/** 22 · Live plan (BM-034, Berfin). Figma frame: 22 · BM-034 · Live plan · Berfin */
export default function LivePlanRoute() {
  return (
    <ComingSoon
      id="22"
      name="Live plan"
      header
      links={[
        { label: "Agents → 23", href: "/agents" },
        { label: "Options → 24", href: "/task/demo/options" },
        { label: "Approval → 36", href: "/task/demo/approve" },
        { label: "Stop → 40", href: "/task/demo/stop" },
        { label: "Plan changed → 41", href: "/task/demo/replan" }
      ]}
    />
  );
}
