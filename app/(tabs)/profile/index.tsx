import { ComingSoon } from '@/navigation/ComingSoon';

/** 03 · Profile (BM-011, Melike) */
export default function ProfileRoute() {
  return (
    <ComingSoon
      id="03"
      name="Profile"
      tabBar
      links={[
        { label: 'Personal details → Edit', href: '/profile/edit' },
        { label: 'Preferences → 07', href: '/profile/digital-twin' },
        { label: 'Connected data → 04', href: '/profile/connected-data' },
        { label: 'Permissions → 05', href: '/profile/permissions' },
        { label: 'Spending → 06', href: '/profile/spending' },
        { label: 'Delete my data → BM-039', href: '/profile/delete-data' },
      ]}
    />
  );
}
