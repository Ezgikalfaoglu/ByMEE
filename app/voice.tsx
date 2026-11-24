import { ComingSoon } from '@/navigation/ComingSoon';

/** 18 · Voice assistant (BM-016, Berfin). Figma frame: 18 · BM-016 · Voice assistant · Berfin */
export default function VoiceAssistantRoute() {
  return (
    <ComingSoon
      id="18"
      name="Voice assistant"
      links={[
        { label: "Done → 21", href: "/task/demo/summary" },
        { label: "Keyboard → 19", href: "/chat/demo" }
      ]}
    />
  );
}
