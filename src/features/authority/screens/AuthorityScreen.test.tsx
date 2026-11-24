import { fireEvent, render, screen } from '@testing-library/react-native';
import { failNextCall, resetMockConfig, setMockDelay } from '@/services';
import { readAuthorityLog, readRule, resetAuthorityMock } from '../data/authority.mock';
import { AuthorityScreen } from './AuthorityScreen';

// Jest cannot load the Ionicons font file; the back arrow icon is decorative.
jest.mock('@expo/vector-icons', () => {
  const { View } = jest.requireActual<typeof import('react-native')>('react-native');
  return { Ionicons: ({ name }: { name: string }) => <View testID={`icon-${name}`} /> };
});

beforeEach(() => {
  resetMockConfig();
  setMockDelay(0);
  resetAuthorityMock();
});

async function renderScreen(onSaved = jest.fn(), onBack = jest.fn()) {
  await render(<AuthorityScreen taskId="demo" onSaved={onSaved} onBack={onBack} />);
  await screen.findByText('How much can I do on my own?');
  return { onSaved, onBack };
}

const slider = () => screen.getByRole('adjustable', { name: 'Drag to change' });
const adjust = (actionName: 'increment' | 'decrement') =>
  fireEvent(slider(), 'accessibilityAction', { nativeEvent: { actionName } });
const saveButton = () => screen.getByRole('button', { name: 'Save permissions' });

describe('35 · Authority setup (BM-013)', () => {
  it('shows every quoted text of the story', async () => {
    await renderScreen();
    for (const text of [
      'Antalya trip',
      'How much can I do on my own?',
      'Spending limit per action',
      'Drag to change',
      '₺0',
      '₺10.000',
      'Book under the limit without asking',
      'Share my phone and email',
      'Only with the hotel',
      'Pay with my saved card',
      'I always ask first',
      'Valid for',
      'This task',
      '7 days',
      'Always',
      'Save permissions',
    ]) {
      expect(screen.getByText(text)).toBeTruthy();
    }
    // The limit is shown large and next to the slider label.
    expect(screen.getAllByText('₺5.000')).toHaveLength(2);
  });

  it('starts with book and share on, saved card off, "This task" selected', async () => {
    await renderScreen();
    expect(screen.getByRole('switch', { name: 'Book under the limit without asking' })).toBeChecked();
    expect(screen.getByRole('switch', { name: 'Share my phone and email, Only with the hotel' })).toBeChecked();
    expect(screen.getByRole('switch', { name: 'Pay with my saved card, I always ask first' })).not.toBeChecked();
    expect(screen.getByRole('radio', { name: 'This task' })).toBeChecked();
    expect(screen.getByRole('radio', { name: '7 days' })).not.toBeChecked();
    expect(slider().props.accessibilityValue).toMatchObject({ min: 0, max: 10000, now: 5000, text: '5,000 lira' });
  });

  it('the slider moves in ₺500 steps and limit 0 shows the note', async () => {
    await renderScreen();
    await adjust('increment');
    expect(screen.getAllByText('₺5.500')).toHaveLength(2);
    expect(screen.queryByText('Beemy will ask before every action.')).toBeNull();

    for (let i = 0; i < 11; i += 1) await adjust('decrement');
    expect(screen.getAllByText('₺0')).toHaveLength(3);
    expect(screen.getByText('Beemy will ask before every action.')).toBeTruthy();
  });

  it('"Save permissions" stores the rule with the task, writes the log line and opens 22', async () => {
    const { onSaved } = await renderScreen();
    await fireEvent(screen.getByRole('switch', { name: 'Book under the limit without asking' }), 'valueChange', false);
    await fireEvent.press(screen.getByRole('radio', { name: 'Always' }));
    await adjust('increment');

    await fireEvent.press(saveButton());
    await screen.findByText('How much can I do on my own?');

    expect(onSaved).toHaveBeenCalledTimes(1);
    const stored = readRule('demo');
    expect(stored).toMatchObject({
      taskId: 'demo',
      limitPerAction: 5500,
      autoBook: false,
      shareContact: true,
      payWithSavedCard: false,
      validFor: 'always',
      expiresAt: null,
    });
    expect(stored?.savedAt).toEqual(expect.any(String));
    expect(onSaved.mock.calls[0][0]).toEqual(stored);
    expect(readAuthorityLog()).toEqual([
      expect.objectContaining({ taskId: 'demo', status: 'auto', title: 'Permissions set for Antalya trip' }),
    ]);
  });

  it('"7 days" sets expiresAt a week ahead', async () => {
    const { onSaved } = await renderScreen();
    const before = Date.now();
    await fireEvent.press(screen.getByRole('radio', { name: '7 days' }));
    await fireEvent.press(saveButton());
    await screen.findByText('How much can I do on my own?');
    const expiresAt = new Date(onSaved.mock.calls[0][0].expiresAt).getTime();
    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    expect(expiresAt - before).toBeGreaterThanOrEqual(sevenDays - 5000);
    expect(expiresAt - before).toBeLessThanOrEqual(sevenDays + 5000);
  });

  it('shows a saved rule again when the screen reopens', async () => {
    const { onSaved } = await renderScreen();
    await adjust('decrement');
    await fireEvent.press(saveButton());
    await screen.findByText('How much can I do on my own?');
    expect(onSaved).toHaveBeenCalled();

    await screen.unmount();
    await renderScreen();
    expect(screen.getAllByText('₺4.500')).toHaveLength(2);
  });

  it('the back arrow calls onBack', async () => {
    const { onBack } = await renderScreen();
    await fireEvent.press(screen.getByRole('button', { name: 'Back' }));
    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it('shows the loading state first', async () => {
    setMockDelay(50);
    await render(<AuthorityScreen taskId="demo" onSaved={jest.fn()} onBack={jest.fn()} />);
    expect(screen.getByText('Loading…')).toBeTruthy();
    expect(await screen.findByText('How much can I do on my own?')).toBeTruthy();
  });

  it('shows the error state and recovers with "Try again"', async () => {
    failNextCall('execution', "Couldn't load this. Try again.");
    await render(<AuthorityScreen taskId="demo" onSaved={jest.fn()} onBack={jest.fn()} />);
    expect(await screen.findByText("Couldn't load this. Try again.")).toBeTruthy();
    expect(screen.queryByText('Save permissions')).toBeNull();

    await fireEvent.press(screen.getByRole('button', { name: 'Try again' }));
    expect(await screen.findByText('How much can I do on my own?')).toBeTruthy();
  });

  it('shows the standard message when saving fails, and nothing is stored', async () => {
    const { onSaved } = await renderScreen();
    failNextCall('execution', "That didn't work. Nothing was changed.");
    await fireEvent.press(saveButton());
    expect(await screen.findByText("That didn't work. Nothing was changed.")).toBeTruthy();
    expect(onSaved).not.toHaveBeenCalled();
    expect(readRule('demo')).toBeNull();
    expect(readAuthorityLog()).toEqual([]);
  });
});
