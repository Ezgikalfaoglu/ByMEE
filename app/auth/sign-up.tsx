import { ComingSoon } from '@/navigation/ComingSoon';

/** 03 · Sign up (BM-009, Melike). Figma frame: 03 · BM-009 · Sign up · Melike */
export default function SignUpRoute() {
  return (
    <ComingSoon
      id="03"
      name="Sign up"
      header
      links={[
        { label: "Create account → 04", href: "/auth/verify" },
        { label: "Log in → 05", href: "/auth/log-in" }
      ]}
    />
  );
}
