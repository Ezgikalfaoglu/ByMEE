import { ComingSoon } from '@/navigation/ComingSoon';

/** 42 · No valid option (BM-048, Berfin). Figma frame: 42 · BM-048 · No valid option · Berfin */
export default function NoValidOptionRoute() {
  return (
    <ComingSoon
      id="42"
      name="No valid option"
      header
      links={[
        { label: "Try with these changes → 22", href: "/task/demo" }
      ]}
    />
  );
}
