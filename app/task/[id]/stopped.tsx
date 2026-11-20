import { ComingSoon } from '@/navigation/ComingSoon';

/** 24 · No valid option (BM-037, Berfin). Figma frame: 24 · BM-037 · No valid option · Berfin */
export default function NoValidOptionRoute() {
  return (
    <ComingSoon
      id="24"
      name="No valid option"
      header
      links={[
        { label: "Yeni s\u0131n\u0131r belirle \u2192 25", href: "/task/demo/new-limit" },
        { label: "G\u00f6revi kapat \u2192 03", href: "/home", mode: "dismissTo" }
      ]}
    />
  );
}
