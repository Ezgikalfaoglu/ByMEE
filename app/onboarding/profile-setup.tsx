import { ComingSoon } from '@/navigation/ComingSoon';

/** 02 · Profile setup, step 1 of 3 (BM-006, Melike). Steps 2 and 3 are 04 and 05. */
export default function ProfileSetupRoute() {
  return (
    <ComingSoon
      id="02"
      name="Profile setup"
      header
      links={[{ label: 'Finish setup → 09', href: '/home', mode: 'replace' }]}
    />
  );
}
