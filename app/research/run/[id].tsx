import { ComingSoon } from '@/navigation/ComingSoon';

/** 51 · Run log (BM-073, Eda). Figma frame: 51 · BM-073 · Run log · Eda */
export default function RunLogRoute() {
  return (
    <ComingSoon
      id="51"
      name="Run log"
      header
      links={[
        { label: "Compare runs → 34", href: "/research/compare" },
        { label: "Summary → 17", href: "/research/summary" }
      ]}
    />
  );
}
