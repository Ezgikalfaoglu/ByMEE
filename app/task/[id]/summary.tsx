import { ComingSoon } from '@/navigation/ComingSoon';

/** 21 · Task summary (BM-020, Eda). Figma frame: 21 · BM-020 · Task summary · Eda */
export default function TaskSummaryRoute() {
  return (
    <ComingSoon
      id="21"
      name="Task summary"
      header
      links={[
        { label: "Looks good, start → 35", href: "/task/demo/authority" },
        { label: "Start (permission set) → 22", href: "/task/demo" }
      ]}
    />
  );
}
