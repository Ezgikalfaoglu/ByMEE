import { ComingSoon } from '@/navigation/ComingSoon';

/** 01 · Welcome (BM-005, Melike) */
export default function WelcomeRoute() {
  return (
    <ComingSoon
      id="01"
      name="Welcome"
      links={[{ label: 'Get started → 02', href: '/onboarding/profile-setup' }]}
    />
  );
}
