import { ComingSoon } from '@/navigation/ComingSoon';

/** 20 · My tasks (BM-028, Eda). Figma frame: 20 · BM-028 · My tasks · Eda */
export default function MyTasksRoute() {
  return (
    <ComingSoon
      id="20"
      name="My tasks"
      tabBar
      links={[
        { label: "New task → 18", href: "/voice" },
        { label: "Approve → 36", href: "/task/demo/approve" },
        { label: "Task → 22", href: "/task/demo" }
      ]}
    />
  );
}
