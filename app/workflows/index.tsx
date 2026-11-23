import { ComingSoon } from '@/navigation/ComingSoon';

/** 49 · Learned workflows (BM-080, Berfin). Figma frame: 49 · BM-080 · Learned workflows · Berfin */
export default function LearnedWorkflowsRoute() {
  return (
    <ComingSoon
      id="49"
      name="Learned workflows"
      header
      links={[
        { label: "Teach a new one → 48", href: "/workflows/teach" }
      ]}
    />
  );
}
