import { ComingSoon } from '@/navigation/ComingSoon';

/** 41 · Plan changed (BM-056, Berfin). Figma frame: 41 · BM-056 · Plan changed · Berfin */
export default function PlanChangedRoute() {
  return (
    <ComingSoon
      id="41"
      name="Plan changed"
      header
      links={[
        { label: "Accept the new plan → 22", href: "/task/demo" }
      ]}
    />
  );
}
