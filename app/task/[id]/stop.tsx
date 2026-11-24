import { ComingSoon } from '@/navigation/ComingSoon';

/** 40 · Emergency stop (BM-047, Berfin). Figma frame: 40 · BM-047 · Emergency stop · Berfin */
export default function EmergencyStopRoute() {
  return (
    <ComingSoon
      id="40"
      name="Emergency stop"
      header
      links={[
        { label: "Cancel → 22", href: "/task/demo" }
      ]}
    />
  );
}
