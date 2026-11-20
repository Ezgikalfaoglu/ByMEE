import { ComingSoon } from '@/navigation/ComingSoon';

/** 03 · My tasks (BM-014, Melike). Figma frame: 03 · BM-014 · My tasks · Melike */
export default function MyTasksRoute() {
  return (
    <ComingSoon
      id="03"
      name="My tasks"
      tabBar
      links={[
        { label: "Zil \u2192 04", href: "/home/notifications" },
        { label: "G\u00f6rev kart\u0131 \u2192 14", href: "/task/demo" },
        { label: "Yeni g\u00f6rev \u2192 11", href: "/new" }
      ]}
    />
  );
}
