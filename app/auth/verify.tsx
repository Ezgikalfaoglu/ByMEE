import { ComingSoon } from '@/navigation/ComingSoon';

/** 04 · Verify code (BM-017, Melike). Figma frame: 04 · BM-017 · Verify code · Melike */
export default function VerifyCodeRoute() {
  return (
    <ComingSoon
      id="04"
      name="Verify code"
      header
      links={[
        { label: "Verify → 07", href: "/onboarding/permissions" }
      ]}
    />
  );
}
