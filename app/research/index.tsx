import { ComingSoon } from '@/navigation/ComingSoon';

/** 19 · Scenario library (BM-050, Eda). Figma frame: 19 · BM-050 · Scenario library · Eda */
export default function ScenarioLibraryRoute() {
  return (
    <ComingSoon
      id="19"
      name="Scenario library"
      header
      links={[
        { label: "Ko\u015fu ayarla \u2192 20", href: "/research/run/new" },
        { label: "De\u011ferlendirme \u2192 10", href: "/research/summary" }
      ]}
    />
  );
}
