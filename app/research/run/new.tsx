import { ComingSoon } from '@/navigation/ComingSoon';

/** 33 · Run setup (BM-069, Eda). Figma frame: 33 · BM-069 · Run setup · Eda */
export default function RunSetupRoute() {
  return (
    <ComingSoon
      id="33"
      name="Run setup"
      header
      links={[
        { label: "Start run → 51", href: "/research/run/demo" }
      ]}
    />
  );
}
