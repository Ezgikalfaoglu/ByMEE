import { ComingSoon } from '@/navigation/ComingSoon';

/** 47 · Workflow discovery (BM-078, Eda). Figma frame: 47 · BM-078 · Workflow discovery · Eda */
export default function WorkflowDiscoveryRoute() {
  return (
    <ComingSoon
      id="47"
      name="Workflow discovery"
      header
      links={[
        { label: "Automate it → 49", href: "/workflows" }
      ]}
    />
  );
}
