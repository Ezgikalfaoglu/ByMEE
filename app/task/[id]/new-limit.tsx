import { ComingSoon } from '@/navigation/ComingSoon';

/** 25 · New limit (BM-041, Berfin). Figma frame: 25 · BM-041 · New limit · Berfin */
export default function NewLimitRoute() {
  return (
    <ComingSoon
      id="25"
      name="New limit"
      header
      links={[
        { label: "Yeni yetkiyi onayla \u2192 14", href: "/task/demo" }
      ]}
    />
  );
}
