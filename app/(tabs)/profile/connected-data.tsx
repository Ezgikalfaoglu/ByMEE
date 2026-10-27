import { ComingSoon } from '@/navigation/ComingSoon';

/** 04 · Connected data (BM-017, Melike) */
export default function ConnectedDataRoute() {
  return (
    <ComingSoon
      id="04"
      name="Connected data"
      header
      tabBar
      links={[{ label: 'Manage permissions → 05', href: '/profile/permissions' }]}
    />
  );
}
