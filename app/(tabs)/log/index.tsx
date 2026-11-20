import { ComingSoon } from '@/navigation/ComingSoon';

/** 27 · Audit log (BM-052, Berfin). Figma frame: 27 · BM-052 · Audit log · Berfin */
export default function AuditLogRoute() {
  return (
    <ComingSoon
      id="27"
      name="Audit log"
      tabBar
      links={[
        { label: "Kay\u0131t \u2192 28", href: "/log/demo-entry" }
      ]}
    />
  );
}
