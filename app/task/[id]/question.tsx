import { ComingSoon } from '@/navigation/ComingSoon';

/** 23 · Targeted question (BM-019, Berfin). Figma frame: 23 · BM-019 · Targeted question · Berfin */
export default function TargetedQuestionRoute() {
  return (
    <ComingSoon
      id="23"
      name="Targeted question"
      header
      links={[
        { label: "Yan\u0131tla ve devam et \u2192 14", href: "/task/demo" }
      ]}
    />
  );
}
