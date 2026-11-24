import { ComingSoon } from '@/navigation/ComingSoon';

/** 09 · Home (BM-031, Melike). Figma frame: 09 · BM-031 · Home · Melike */
export default function HomeRoute() {
  return (
    <ComingSoon
      id="09"
      name="Home"
      tabBar
      links={[
        { label: "Mic → 18", href: "/voice" },
        { label: "Next step → 36", href: "/task/demo/approve" },
        { label: "For you → 10", href: "/home/for-you" }
      ]}
    />
  );
}
