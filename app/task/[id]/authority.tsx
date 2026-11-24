import { ComingSoon } from '@/navigation/ComingSoon';

/** 35 · Authority setup (BM-013, Berfin). Figma frame: 35 · BM-013 · Authority setup · Berfin */
export default function AuthoritySetupRoute() {
  return (
    <ComingSoon
      id="35"
      name="Authority setup"
      header
      links={[
        { label: "Save permissions → 22", href: "/task/demo" }
      ]}
    />
  );
}
