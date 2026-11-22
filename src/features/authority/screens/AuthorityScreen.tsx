/**
 * 21 · BM-013 · Authority setup · Berfin  —  route /task/[id]/authority
 *
 * The user gives Beemy its authority once, at the start of the task:
 * which actions are allowed, within which limits, and whether Beemy asks
 * before every binding action (condition A) or runs the task on its own (condition B).
 * "Yetkiyi ver ve başlat" stores the authority with the task and opens 14 Plan and progress.
 */

import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText, Button, Card, Screen, ScreenHeader, StateView } from '@/components';
import { isServiceError } from '@/services';
import { colors, spacing } from '@/theme';
import type { Condition, Id } from '@/types/common';
import { ActionSwitchRow } from '../components/ActionSwitchRow';
import { BeemyMascot } from '../components/BeemyMascot';
import { ConditionChoice } from '../components/ConditionChoice';
import { LimitRow } from '../components/LimitRow';
import { SectionLabel } from '../components/SectionLabel';
import { getAuthorityProposal, grantAuthority } from '../data/authority.mock';
import { authorityTexts as t } from '../data/authority.texts';
import { createAuthority, isSensitive, setActionEnabled, setCondition } from '../lib/authority';
import { formatAmountCap, formatShareable, formatValidUntil } from '../lib/format';
import type { ActionKind, AuthorityAction, TaskAuthority } from '../types';

export type AuthorityScreenProps = {
  taskId: Id;
  /** Called after the authority is stored with the task. The route opens 14 Plan and progress. */
  onStart: (authority: TaskAuthority) => void;
  /** Back arrow. Defaults to going back in the stack. */
  onBack?: () => void;
};

type LoadState = { status: 'loading' } | { status: 'error'; message: string } | { status: 'ready' };

/** The sensitive actions always show their "Must keep" text, whatever the task proposes. */
function labelOf(action: AuthorityAction): string {
  if (action.kind === 'pay') return t.pay;
  if (action.kind === 'share_document') return t.shareDocument;
  return action.label;
}

export function AuthorityScreen({ taskId, onStart, onBack }: AuthorityScreenProps) {
  const [load, setLoad] = useState<LoadState>({ status: 'loading' });
  const [authority, setAuthority] = useState<TaskAuthority | null>(null);
  const [starting, setStarting] = useState(false);
  const [startError, setStartError] = useState<string | null>(null);

  const loadProposal = useCallback(async () => {
    setLoad({ status: 'loading' });
    try {
      const { data } = await getAuthorityProposal(taskId);
      setAuthority(createAuthority(data));
      setLoad({ status: 'ready' });
    } catch (error) {
      setLoad({ status: 'error', message: isServiceError(error) ? error.message : t.loadError });
    }
  }, [taskId]);

  useEffect(() => {
    void loadProposal();
  }, [loadProposal]);

  const toggleAction = (kind: ActionKind, enabled: boolean) =>
    setAuthority((current) => (current ? setActionEnabled(current, kind, enabled) : current));

  const chooseCondition = (condition: Condition) =>
    setAuthority((current) => (current ? setCondition(current, condition) : current));

  const start = async () => {
    if (!authority || starting) return;
    setStarting(true);
    setStartError(null);
    try {
      const { data } = await grantAuthority(authority);
      onStart(data);
    } catch (error) {
      setStartError(isServiceError(error) ? error.message : t.startError);
    } finally {
      setStarting(false);
    }
  };

  const header = <ScreenHeader title={t.header} showBack onBack={onBack} />;

  if (load.status !== 'ready' || !authority) {
    return (
      <Screen header={header} scroll={false}>
        {load.status === 'error' ? (
          <StateView state="error" message={load.message} actionLabel={t.retry} onAction={loadProposal} />
        ) : (
          <StateView state="loading" message={t.loading} />
        )}
      </Screen>
    );
  }

  const { limits } = authority;

  return (
    <Screen
      header={header}
      footer={
        <View style={styles.footer}>
          {startError ? (
            <AppText variant="caption" color={colors.danger} center accessibilityLiveRegion="polite">
              {startError}
            </AppText>
          ) : null}
          <Button label={t.start} onPress={start} loading={starting} />
        </View>
      }
    >
      <View style={styles.intro}>
        <BeemyMascot mood="dusunuyor" accessibilityLabel={t.mascotLabel} />
        <View style={styles.introText}>
          <AppText variant="heading" accessibilityRole="header">
            {t.title}
          </AppText>
          <AppText variant="caption" muted>
            {t.scope}
          </AppText>
        </View>
      </View>

      <Card>
        <SectionLabel>{t.allowedActions}</SectionLabel>
        {authority.actions.map((action) => (
          <ActionSwitchRow
            key={action.kind}
            label={labelOf(action)}
            enabled={action.enabled}
            locked={isSensitive(action.kind)}
            onChange={(enabled) => toggleAction(action.kind, enabled)}
          />
        ))}
      </Card>

      <Card>
        <SectionLabel>{t.limits}</SectionLabel>
        <LimitRow label={t.recipient} value={limits.recipient} />
        <LimitRow label={t.shareable} value={formatShareable(limits.shareableData)} />
        <LimitRow label={t.validUntil} value={formatValidUntil(limits.validUntil)} />
        <LimitRow label={t.amountCap} value={formatAmountCap(limits.amountCap)} />
      </Card>

      <View style={styles.conditionBlock}>
        <SectionLabel>{t.bindingActions}</SectionLabel>
        <ConditionChoice value={authority.condition} onChange={chooseCondition} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  intro: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm + 4 },
  introText: { flex: 1, gap: spacing.xs },
  conditionBlock: { gap: spacing.sm },
  footer: { gap: spacing.sm },
});
