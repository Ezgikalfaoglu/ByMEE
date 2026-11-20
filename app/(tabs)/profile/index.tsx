import { ComingSoon } from '@/navigation/ComingSoon';

/** 05 · Profile (BM-015, Melike). Figma frame: 05 · BM-015 · Profile · Melike */
export default function ProfileRoute() {
  return (
    <ComingSoon
      id="05"
      name="Profile"
      tabBar
      links={[
        { label: "Bilgileri d\u00fczenle \u2192 06", href: "/profile/facts" },
        { label: "T\u00fcm belgeler \u2192 07", href: "/profile/documents" },
        { label: "Tercihler \u2192 08", href: "/profile/preferences" },
        { label: "Ayarlar \u2192 09", href: "/profile/settings" },
        { label: "Aktif yetkiler \u2192 29", href: "/profile/permissions" }
      ]}
    />
  );
}
