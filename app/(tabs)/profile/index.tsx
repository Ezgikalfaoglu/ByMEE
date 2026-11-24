import { ComingSoon } from '@/navigation/ComingSoon';

/** 11 · Profile (BM-032, Melike). Figma frame: 11 · BM-032 · Profile · Melike */
export default function ProfileRoute() {
  return (
    <ComingSoon
      id="11"
      name="Profile"
      tabBar
      links={[
        { label: "What I learned → 12", href: "/profile/learned" },
        { label: "Decision twin → 13", href: "/profile/decision-twin" },
        { label: "Connected sources → 14", href: "/profile/sources" },
        { label: "Rules → 15", href: "/profile/rules" },
        { label: "Settings → 16", href: "/profile/settings" },
        { label: "Permissions → 50", href: "/profile/permissions" }
      ]}
    />
  );
}
