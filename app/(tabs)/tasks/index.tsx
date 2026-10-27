import { ComingSoon } from '@/navigation/ComingSoon';

/** 14 · Task list (BM-020, Eda) */
export default function TaskListRoute() {
  return (
    <ComingSoon
      id="14"
      name="Tasks"
      tabBar
      links={[
        { label: 'Open task → 15', href: '/tasks/demo-task' },
        { label: 'Research something → 10', href: '/explore' },
      ]}
    />
  );
}
