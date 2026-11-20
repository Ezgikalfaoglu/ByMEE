import { ComingSoon } from '@/navigation/ComingSoon';

/** 09 · Settings (BM-030, Melike). Figma frame: 09 · BM-030 · Settings · Melike */
export default function SettingsRoute() {
  return (
    <ComingSoon
      id="09"
      name="Settings"
      tabBar
      header
      links={[
        { label: "Dil \u2192 02", href: "/onboarding/language" },
        { label: "Ara\u015ft\u0131rma modu \u2192 19", href: "/research" }
      ]}
    />
  );
}
