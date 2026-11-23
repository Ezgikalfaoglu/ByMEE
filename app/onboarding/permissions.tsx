import { ComingSoon } from '@/navigation/ComingSoon';

/** 07 · Permissions and data sources (BM-025, Melike). Figma frame: 07 · BM-025 · Permissions and data sources · Melike */
export default function PermissionsAndDataSourcesRoute() {
  return (
    <ComingSoon
      id="07"
      name="Permissions and data sources"
      header
      links={[
        { label: "Continue → 08", href: "/onboarding/about-you" }
      ]}
    />
  );
}
