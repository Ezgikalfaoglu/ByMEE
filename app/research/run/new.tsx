import { ComingSoon } from '@/navigation/ComingSoon';

/** 20 · Run setup (BM-051, Eda). Figma frame: 20 · BM-051 · Run setup · Eda */
export default function RunSetupRoute() {
  return (
    <ComingSoon
      id="20"
      name="Run setup"
      header
      links={[
        { label: "Ko\u015fuyu ba\u015flat \u2192 30", href: "/research/run/demo-run" }
      ]}
    />
  );
}
