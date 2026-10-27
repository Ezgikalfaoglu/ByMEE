import { ComingSoon } from '@/navigation/ComingSoon';

/** 09 · Home: today's Thread (BM-007, Eda) */
export default function HomeRoute() {
  return (
    <ComingSoon
      id="09"
      name="Home"
      tabBar
      links={[
        { label: 'Ask ByMEE → 17', href: '/assistant' },
        { label: 'Bell → 08', href: '/home/alerts' },
        { label: 'In progress → 14', href: '/tasks' },
        { label: 'Knot → 15', href: '/tasks/demo-task' },
        { label: 'Gate → 19', href: '/gate/approve' },
      ]}
    />
  );
}
