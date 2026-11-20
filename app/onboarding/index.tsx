import { ComingSoon } from '@/navigation/ComingSoon';

/** 01 · Welcome (BM-007, Melike). Figma frame: 01 · BM-007 · Welcome · Melike */
export default function WelcomeRoute() {
  return (
    <ComingSoon
      id="01"
      name="Welcome"
      links={[
        { label: "Ba\u015flayal\u0131m \u2192 02", href: "/onboarding/language" }
      ]}
    />
  );
}
