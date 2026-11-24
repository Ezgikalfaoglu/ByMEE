import { ComingSoon } from '@/navigation/ComingSoon';

/** 44 · Task completed (BM-058, Berfin). Figma frame: 44 · BM-058 · Task completed · Berfin */
export default function TaskCompletedRoute() {
  return (
    <ComingSoon
      id="44"
      name="Task completed"
      header
      links={[
        { label: "See the log → 45", href: "/log" },
        { label: "Home → 09", href: "/home" }
      ]}
    />
  );
}
