import { ComingSoon } from '@/navigation/ComingSoon';

/** 21 · Authority setup (BM-013, Berfin). Figma frame: 21 · BM-013 · Authority setup · Berfin */
export default function AuthoritySetupRoute() {
  return (
    <ComingSoon
      id="21"
      name="Authority setup"
      header
      links={[
        { label: "Yetkiyi ver ve ba\u015flat \u2192 14", href: "/task/demo" }
      ]}
    />
  );
}
