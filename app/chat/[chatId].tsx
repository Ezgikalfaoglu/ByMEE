import { ComingSoon } from '@/navigation/ComingSoon';

/** 19 · Type mode (BM-024, Eda). Figma frame: 19 · BM-024 · Type mode · Eda */
export default function TypeModeRoute() {
  return (
    <ComingSoon
      id="19"
      name="Type mode"
      header
      links={[
        { label: "Mic → 18", href: "/voice" },
        { label: "Book → 37", href: "/task/demo/approve-payment" }
      ]}
    />
  );
}
