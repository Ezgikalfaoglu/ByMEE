import { ComingSoon } from '@/navigation/ComingSoon';

/** 12 · Task summary (BM-016, Eda). Figma frame: 12 · BM-016 · Task summary · Eda */
export default function TaskSummaryRoute() {
  return (
    <ComingSoon
      id="12"
      name="Task summary"
      header
      links={[
        { label: "Do\u011fru, yetkiyi tan\u0131mla \u2192 21", href: "/task/demo/authority" },
        { label: "D\u00fczelt \u2192 13", href: "/task/demo/edit" },
        { label: "Eksik bilgi \u2192 23", href: "/task/demo/question" }
      ]}
    />
  );
}
