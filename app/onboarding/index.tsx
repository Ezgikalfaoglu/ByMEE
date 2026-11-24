import { ComingSoon } from '@/navigation/ComingSoon';

/** 01 · Welcome (BM-007, Melike). Figma frame: 01 · BM-007 · Welcome · Melike */
export default function WelcomeRoute() {
  return (
    <ComingSoon
      id="01"
      name="Welcome"
      links={[
        { label: "Get started → 02", href: "/onboarding/language" },
        { label: "I already have an account → 05", href: "/auth/log-in" }
      ]}
    />
  );
}
