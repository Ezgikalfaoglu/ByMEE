import { ComingSoon } from '@/navigation/ComingSoon';

/** 23 · Agents (BM-035, Berfin). Figma frame: 23 · BM-035 · Agents · Berfin */
export default function AgentsRoute() {
  return (
    <ComingSoon
      id="23"
      name="Agents"
      header
      links={[
        { label: "Log → 45", href: "/log" }
      ]}
    />
  );
}
