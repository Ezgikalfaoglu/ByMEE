import { ComingSoon } from '@/navigation/ComingSoon';

/** 08 · Alerts (BM-033, Melike) */
export default function AlertsRoute() {
  return (
    <ComingSoon
      id="08"
      name="Alerts"
      header
      tabBar
      links={[
        { label: 'See shortlist → 12', href: '/explore/shortlist' },
        { label: 'Pick a time → 23', href: '/gate/time' },
        { label: 'Open task → 15', href: '/tasks/demo-task' },
      ]}
    />
  );
}
