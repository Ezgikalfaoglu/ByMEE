import { ComingSoon } from '@/navigation/ComingSoon';

/** 32 · Scenario library (BM-068, Eda). Figma frame: 32 · BM-068 · Scenario library · Eda */
export default function ScenarioLibraryRoute() {
  return (
    <ComingSoon
      id="32"
      name="Scenario library"
      header
      links={[
        { label: "New run → 33", href: "/research/run/new" }
      ]}
    />
  );
}
