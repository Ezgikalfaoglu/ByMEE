import { useRouter, type Href } from 'expo-router';
import type { Edge } from 'react-native-safe-area-context';
import { AppText, Button, Screen } from '@/components';

export type ComingSoonLink = {
  /** Development-only shortcut, e.g. "Get started → 02". */
  label: string;
  /** Plain string on purpose: these are temporary dev links, not checked against typed routes. */
  href: string;
  /** push (default), replace (no way back) or dismissTo (close the gate flow). */
  mode?: 'push' | 'replace' | 'dismissTo';
};

export type ComingSoonProps = {
  /** Screen number from the stories, e.g. "12". */
  id: string;
  name: string;
  /** The screen has a native header above it (back arrow or ✕). */
  header?: boolean;
  /** The screen sits above the tab bar. */
  tabBar?: boolean;
  links?: ComingSoonLink[];
};

/**
 * BM-002: placeholder for every route that is not built yet.
 * The owner of the screen replaces this with the real screen in their own PR.
 * The links are only shown in development builds, so the navigation shell can be tested.
 */
export function ComingSoon({ id, name, header = false, tabBar = false, links = [] }: ComingSoonProps) {
  const router = useRouter();

  const edges: Edge[] = [];
  if (!header) edges.push('top');
  if (!tabBar) edges.push('bottom');

  const go = (link: ComingSoonLink) => {
    const href = link.href as Href;
    if (link.mode === 'replace') router.replace(href);
    else if (link.mode === 'dismissTo') router.dismissTo(href);
    else router.push(href);
  };

  return (
    <Screen edges={edges}>
      <AppText muted>
        {id} · {name}
      </AppText>
      <AppText variant="title">Coming soon</AppText>
      {__DEV__
        ? links.map((link) => (
            <Button key={link.label} label={link.label} variant="secondary" onPress={() => go(link)} />
          ))
        : null}
    </Screen>
  );
}
