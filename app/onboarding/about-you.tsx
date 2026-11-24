import { ComingSoon } from '@/navigation/ComingSoon';

/** 08 · Voice introduction (BM-026, Melike). Figma frame: 08 · BM-026 · Voice introduction · Melike */
export default function VoiceIntroductionRoute() {
  return (
    <ComingSoon
      id="08"
      name="Voice introduction"
      header
      links={[
        { label: "Done → 09", href: "/home" },
        { label: "Skip → 09", href: "/home" }
      ]}
    />
  );
}
