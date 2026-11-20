import { ComingSoon } from '@/navigation/ComingSoon';

/** 26 · Result (BM-042, Berfin). Figma frame: 26 · BM-042 · Result · Berfin */
export default function ResultRoute() {
  return (
    <ComingSoon
      id="26"
      name="Result"
      header
      links={[
        { label: "Kayd\u0131 g\u00f6r \u2192 28", href: "/log/demo-entry" },
        { label: "G\u00f6revlerime d\u00f6n \u2192 03", href: "/home", mode: "dismissTo" }
      ]}
    />
  );
}
