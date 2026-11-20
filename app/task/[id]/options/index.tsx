import { ComingSoon } from '@/navigation/ComingSoon';

/** 15 · Options (BM-033, Eda). Figma frame: 15 · BM-033 · Options · Eda */
export default function OptionsRoute() {
  return (
    <ComingSoon
      id="15"
      name="Options"
      header
      links={[
        { label: "Se\u00e7enek \u2192 16", href: "/task/demo/options/opt-1" }
      ]}
    />
  );
}
