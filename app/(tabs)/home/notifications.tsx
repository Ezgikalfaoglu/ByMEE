import { ComingSoon } from '@/navigation/ComingSoon';

/** 04 · Notifications (BM-031, Melike). Figma frame: 04 · BM-031 · Notifications · Melike */
export default function NotificationsRoute() {
  return (
    <ComingSoon
      id="04"
      name="Notifications"
      tabBar
      header
      links={[
        { label: "Onay \u2192 22", href: "/task/demo/approve" },
        { label: "Soru \u2192 23", href: "/task/demo/question" },
        { label: "Sonu\u00e7 \u2192 26", href: "/task/demo/result" }
      ]}
    />
  );
}
