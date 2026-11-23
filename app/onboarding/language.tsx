import { ComingSoon } from '@/navigation/ComingSoon';

/** 02 · Language (BM-008, Melike). Figma frame: 02 · BM-008 · Language · Melike */
export default function LanguageRoute() {
  return (
    <ComingSoon
      id="02"
      name="Language"
      header
      links={[
        { label: "Continue → 03", href: "/auth/sign-up" }
      ]}
    />
  );
}
