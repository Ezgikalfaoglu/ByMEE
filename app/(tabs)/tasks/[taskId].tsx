import { useLocalSearchParams } from 'expo-router';
import { ComingSoon } from '@/navigation/ComingSoon';

/** 15 · Task details: the task Thread (BM-029, Eda) */
export default function TaskDetailsRoute() {
  const { taskId } = useLocalSearchParams<{ taskId: string }>();
  return (
    <ComingSoon
      id="15"
      name={`Task details · ${taskId ?? ''}`}
      header
      tabBar
      links={[
        { label: 'Review shortlist → 12', href: '/explore/shortlist' },
        { label: 'Review → 19', href: '/gate/approve' },
        { label: 'See offer → 22', href: '/gate/offer' },
        { label: 'Pick a time → 23', href: '/gate/time' },
        { label: 'See booking → 24', href: '/gate/booked' },
      ]}
    />
  );
}
