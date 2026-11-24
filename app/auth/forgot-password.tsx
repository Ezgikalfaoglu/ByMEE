import { ComingSoon } from '@/navigation/ComingSoon';

/** 06 · Forgot password (BM-019, Melike). Figma frame: 06 · BM-019 · Forgot password · Melike */
export default function ForgotPasswordRoute() {
  return (
    <ComingSoon
      id="06"
      name="Forgot password"
      header
      links={[
        { label: "Back to log in → 05", href: "/auth/log-in" }
      ]}
    />
  );
}
