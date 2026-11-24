import { ComingSoon } from '@/navigation/ComingSoon';

/** 24 · Recommendations (BM-043, Eda). Figma frame: 24 · BM-043 · Recommendations · Eda */
export default function RecommendationsRoute() {
  return (
    <ComingSoon
      id="24"
      name="Recommendations"
      header
      links={[
        { label: "Compare all → 25", href: "/task/demo/options/compare" },
        { label: "Choose → 36", href: "/task/demo/approve" },
        { label: "Trip plan → 26", href: "/task/demo/travel" }
      ]}
    />
  );
}
