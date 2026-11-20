import { ComingSoon } from '@/navigation/ComingSoon';

/** 16 · Option details (BM-034, Eda). Figma frame: 16 · BM-034 · Option details · Eda */
export default function OptionDetailsRoute() {
  return (
    <ComingSoon
      id="16"
      name="Option details"
      header
      links={[
        { label: "Bu se\u00e7enekle devam et \u2192 14", href: "/task/demo" }
      ]}
    />
  );
}
