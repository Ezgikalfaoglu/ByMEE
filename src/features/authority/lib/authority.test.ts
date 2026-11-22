import {
  createAuthority,
  isActionAllowed,
  isAmountAllowed,
  isSensitive,
  isValidAt,
  requiresApprovalBeforeAction,
  setActionEnabled,
  setCondition,
} from './authority';
import type { AuthorityProposal } from '../types';

const proposal: AuthorityProposal = {
  taskId: 'task-1',
  actions: [
    { kind: 'search', label: 'İlan ara ve karşılaştır' },
    { kind: 'prepare_document', label: 'CV ve başvuru mesajı hazırla' },
    { kind: 'send', label: 'Başvuruyu gönder' },
    { kind: 'pay', label: 'Ödeme yap' },
    { kind: 'share_document', label: 'Belgeyi başka kişiyle paylaş' },
  ],
  limits: {
    recipient: 'Yalnızca ilan sahibi şirket',
    shareableData: ['CV_en.pdf', 'e-posta'],
    validUntil: '2026-11-27T23:59:00+03:00',
    amountCap: 500,
  },
};

const during = new Date('2026-11-25T10:00:00+03:00');
const after = new Date('2026-11-28T00:00:00+03:00');

describe('authority rules (BM-013)', () => {
  it('"Ödeme yap" and "Belgeyi başka kişiyle paylaş" are off by default, the rest on', () => {
    const authority = createAuthority(proposal);
    const enabled = Object.fromEntries(authority.actions.map((a) => [a.kind, a.enabled]));
    expect(enabled).toEqual({
      search: true,
      prepare_document: true,
      send: true,
      pay: false,
      share_document: false,
    });
    expect(isSensitive('pay')).toBe(true);
    expect(isSensitive('send')).toBe(false);
  });

  it('defaults to condition B and keeps the task id, never the profile', () => {
    const authority = createAuthority(proposal);
    expect(authority.condition).toBe('B');
    expect(authority.taskId).toBe('task-1');
    expect(requiresApprovalBeforeAction(authority)).toBe(false);
    expect(requiresApprovalBeforeAction(setCondition(authority, 'A'))).toBe(true);
  });

  it('given "Ödeme yap" is off, no payment action is ever allowed', () => {
    const authority = createAuthority(proposal);
    expect(isActionAllowed(authority, 'pay', during)).toBe(false);
    expect(isAmountAllowed(authority, 0, during)).toBe(false);
    expect(isAmountAllowed(authority, 100, during)).toBe(false);
    // Turning other actions on or off does not change that.
    const changed = setActionEnabled(setActionEnabled(authority, 'send', false), 'search', true);
    expect(isActionAllowed(changed, 'pay', during)).toBe(false);
  });

  it('a payment needs the switch on and an amount within the cap', () => {
    const authority = setActionEnabled(createAuthority(proposal), 'pay', true);
    expect(isActionAllowed(authority, 'pay', during)).toBe(true);
    expect(isAmountAllowed(authority, 500, during)).toBe(true);
    expect(isAmountAllowed(authority, 500.01, during)).toBe(false);
    expect(isAmountAllowed(authority, -1, during)).toBe(false);
    expect(isAmountAllowed(authority, Number.NaN, during)).toBe(false);
  });

  it('an amount cap of 0 allows no payment even when the switch is on', () => {
    const zeroCap: AuthorityProposal = { ...proposal, limits: { ...proposal.limits, amountCap: 0 } };
    const authority = setActionEnabled(createAuthority(zeroCap), 'pay', true);
    expect(isAmountAllowed(authority, 1, during)).toBe(false);
    expect(isAmountAllowed(authority, 0, during)).toBe(true);
  });

  it('preparing a document and sending it are separate permissions', () => {
    const authority = setActionEnabled(createAuthority(proposal), 'send', false);
    expect(isActionAllowed(authority, 'prepare_document', during)).toBe(true);
    expect(isActionAllowed(authority, 'send', during)).toBe(false);
  });

  it('nothing is allowed after validUntil or with an unreadable date', () => {
    const authority = createAuthority(proposal);
    expect(isValidAt(authority, during)).toBe(true);
    expect(isValidAt(authority, after)).toBe(false);
    expect(isActionAllowed(authority, 'search', after)).toBe(false);
    const broken = { ...authority, limits: { ...authority.limits, validUntil: 'yarın' } };
    expect(isActionAllowed(broken, 'search', during)).toBe(false);
  });

  it('an action the task never proposed is not allowed', () => {
    const noPay: AuthorityProposal = { ...proposal, actions: proposal.actions.filter((a) => a.kind !== 'pay') };
    const authority = createAuthority(noPay);
    expect(isActionAllowed(authority, 'pay', during)).toBe(false);
    expect(setActionEnabled(authority, 'pay', true).actions.some((a) => a.kind === 'pay')).toBe(false);
  });

  it('never mutates the proposal or a previous authority', () => {
    const authority = createAuthority(proposal);
    const changed = setActionEnabled(setCondition(authority, 'A'), 'send', false);
    expect(authority.condition).toBe('B');
    expect(authority.actions.find((a) => a.kind === 'send')?.enabled).toBe(true);
    expect(changed.actions.find((a) => a.kind === 'send')?.enabled).toBe(false);
    changed.limits.shareableData.push('x');
    expect(proposal.limits.shareableData).toEqual(['CV_en.pdf', 'e-posta']);
  });
});
