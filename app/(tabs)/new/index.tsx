import { ComingSoon } from '@/navigation/ComingSoon';

/** 11 · New task (BM-012, Eda). Figma frame: 11 · BM-012 · New task · Eda */
export default function NewTaskRoute() {
  return (
    <ComingSoon
      id="11"
      name="New task"
      tabBar
      links={[
        { label: "G\u00f6revi anla \u2192 12", href: "/task/demo/summary" }
      ]}
    />
  );
}
