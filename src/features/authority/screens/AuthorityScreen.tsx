/**
 * 35 · BM-013 · Authority setup · Berfin  —  route /task/[id]/authority
 *
 * The user sets how much Beemy may do on its own for this task: a spending
 * limit per action, three permission switches and how long the rule is valid.
 * "Save permissions" stores the AuthorityRule with the task and opens 22 Live plan.
 * Back goes to 21 Task summary.
 */

import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText, Button, Screen, StateView } from '@/components';
import { isServiceError } from '@/services';
import { colors, spacing } from '@/theme';
import type { Id } from '@/types/common';
import { IndigoPanel } from '../components/IndigoPanel';
import { LimitSlider } from '../components/LimitSlider';
import { PermissionSwitchRow } from '../components/PermissionSwitchRow';
import { SectionLabel } from '../components/SectionLabel';
import { SegmentedControl, type SegmentedOption } from '../components/SegmentedControl';
import { getAuthoritySetup, saveRule } from '../data/authority.mock';
import { authorityTexts as t } from '../data/authority.texts';
import {
  LIMIT_MAX,
  LIMIT_MIN,
  LIMIT_STEP,
  asksBeforeEveryAction,
  createDefaultRule,
  setLimit,
  setSwitch,
  setValidFor,
} from '../lib/authority';
import { formatLimit, formatLiraSpoken } from '../lib/format';
import type { AuthorityRule, AuthorityTask, ValidFor } from '../types';

export type AuthorityScreenProps = {
  taskId: Id;
  /** Called after the rule is stored with the task. The route opens 22 Live plan. */
  onSaved: (rule: AuthorityRule) => void;
  /** Back arrow → 21 Task summary. */
  onBack: () => void;
};

type LoadState = { status: 'loading' } | { status: 'error'; message: string } | { status: 'ready' };

const validForOptions: SegmentedOption<ValidFor>[] = [
  { value: 'task', label: t.thisTask },
  { value: '7d', label: t.sevenDays },
  { value: 'always', label: t.always },
];

export function AuthorityScreen({ taskId, onSaved, onBack }: AuthorityScreenProps) {
  const [load, setLoad] = useState<LoadState>({ status: 'loading' });
  const [task, setTask] = useState<AuthorityTask | null>(null);
  const [rule, setRule] = useState<AuthorityRule | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const loadSetup = useCallback(async () => {
    setLoad({ status: 'loading' });
    try {
      const { data } = await getAuthoritySetup(taskId);
      setTask(data.task);
      setRule(data.rule ?? createDefaultRule(data.task));
      setLoad({ status: 'ready' });
    } catch (error) {
      setLoad({ status: 'error', message: isServiceError(error) ? error.message : t.loadError });
    }
  }, [taskId]);

  useEffect(() => {
    void loadSetup();
  }, [loadSetup]);

  const update = (change: (current: AuthorityRule) => AuthorityRule) =>
    setRule((current) => (current ? change(current) : current));

  const save = async () => {
    if (!rule || !task || saving) return;
    setSaving(true);
    setSaveError(null);
    try {
      const { data } = await saveRule(rule, task.title);
      onSaved(data);
    } catch (error) {
      setSaveError(isServiceError(error) ? error.message : t.actionFailed);
    } finally {
      setSaving(false);
    }
  };

  if (load.status !== 'ready' || !rule || !task) {
    return (
      <Screen scroll={false}>
        {load.status === 'error' ? (
          <StateView state="error" message={load.message} actionLabel={t.retry} onAction={loadSetup} />
        ) : (
          <StateView state="loading" message={t.loading} />
        )}
      </Screen>
    );
  }

  return (
    <Screen
      edges={['bottom']}
      contentStyle={styles.content}
      footer={
        <View style={styles.footer}>
          {saveError ? (
            <AppText variant="caption" color={colors.danger} center accessibilityLiveRegion="polite">
              {saveError}
            </AppText>
          ) : null}
          <Button label={t.save} onPress={save} loading={saving} style={styles.saveButton} />
        </View>
      }
    >
      <StatusBar style="light" />
      <IndigoPanel title={task.title} heading={t.heading} mood="thinking" backLabel={t.back} onBack={onBack} />

      <View style={styles.body}>
        <View style={[styles.card, styles.limitCard]}>
          <SectionLabel size={12}>{t.limitLabel}</SectionLabel>
          <AppText style={styles.limitValue} accessibilityLiveRegion="polite">
            {formatLimit(rule.limitPerAction)}
          </AppText>
          <LimitSlider
            value={rule.limitPerAction}
            min={LIMIT_MIN}
            max={LIMIT_MAX}
            step={LIMIT_STEP}
            onChange={(value) => update((current) => setLimit(current, value))}
            label={t.drag}
            format={formatLimit}
            spoken={formatLiraSpoken}
          />
          {asksBeforeEveryAction(rule) ? (
            <AppText variant="caption" muted accessibilityLiveRegion="polite">
              {t.limitZeroNote}
            </AppText>
          ) : null}
        </View>

        <View style={[styles.card, styles.switchCard]}>
          <PermissionSwitchRow
            title={t.autoBook}
            value={rule.autoBook}
            onChange={(value) => update((current) => setSwitch(current, 'autoBook', value))}
            divider
          />
          <PermissionSwitchRow
            title={t.shareContact}
            hint={t.shareContactHint}
            value={rule.shareContact}
            onChange={(value) => update((current) => setSwitch(current, 'shareContact', value))}
            divider
          />
          <PermissionSwitchRow
            title={t.payWithSavedCard}
            hint={t.payWithSavedCardHint}
            value={rule.payWithSavedCard}
            onChange={(value) => update((current) => setSwitch(current, 'payWithSavedCard', value))}
          />
        </View>

        <SectionLabel>{t.validFor}</SectionLabel>
        <SegmentedControl
          options={validForOptions}
          value={rule.validFor}
          onChange={(validFor) => update((current) => setValidFor(current, validFor, task))}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 0, paddingVertical: 0, gap: 0 },
  body: { marginTop: -(spacing.lg - spacing.xs), paddingHorizontal: spacing.md, gap: spacing.sm + 4 },
  card: { backgroundColor: colors.surface, borderRadius: 26 },
  limitCard: {
    paddingHorizontal: spacing.lg - spacing.xs,
    paddingVertical: spacing.md + 2,
    gap: spacing.sm - 2,
    shadowColor: colors.nightSoft,
    shadowOpacity: 0.1,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
  limitValue: { fontFamily: 'PlusJakartaSans_700Bold', fontSize: 40, lineHeight: 45, letterSpacing: -0.8 },
  switchCard: { borderRadius: 24, paddingHorizontal: spacing.md + 2, paddingVertical: 2 },
  footer: { gap: spacing.sm },
  saveButton: { backgroundColor: colors.nightSoft, borderRadius: 28, minHeight: 56 },
});
