import { ComingSoon } from '@/navigation/ComingSoon';

/** 05 · Log in (BM-018, Melike). Figma frame: 05 · BM-018 · Log in · Melike */
export default function LogInRoute() {
  return (
    <ComingSoon
      id="05"
      name="Log in"
      header
      links={[
        { label: "Log in → 09", href: "/home" },
        { label: "Forgot password? → 06", href: "/auth/forgot-password" },
        { label: "Create an account → 03", href: "/auth/sign-up" }
      ]}
    />
  );
}
