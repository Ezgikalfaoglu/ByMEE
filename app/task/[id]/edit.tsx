import { ComingSoon } from '@/navigation/ComingSoon';

/** 13 · Edit task (BM-017, Eda). Figma frame: 13 · BM-017 · Edit task · Eda */
export default function EditTaskRoute() {
  return (
    <ComingSoon
      id="13"
      name="Edit task"
      header
      links={[
        { label: "G\u00fcncelle ve \u00f6zete d\u00f6n \u2192 12", href: "/task/demo/summary" }
      ]}
    />
  );
}
