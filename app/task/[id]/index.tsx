import { ComingSoon } from '@/navigation/ComingSoon';

/** 14 · Plan and progress (BM-027, Eda). Figma frame: 14 · BM-027 · Plan and progress · Eda */
export default function PlanAndProgressRoute() {
  return (
    <ComingSoon
      id="14"
      name="Plan and progress"
      header
      links={[
        { label: "Se\u00e7enekler \u2192 15", href: "/task/demo/options" },
        { label: "Belge \u2192 17", href: "/task/demo/document" },
        { label: "Yaz\u0131\u015fma \u2192 18", href: "/task/demo/messages" },
        { label: "Onay (Ko\u015ful A) \u2192 22", href: "/task/demo/approve" }
      ]}
    />
  );
}
