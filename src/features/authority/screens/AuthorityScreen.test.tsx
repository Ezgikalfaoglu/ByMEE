import { fireEvent, render, screen } from '@testing-library/react-native';
import { failNextCall, resetMockConfig, setMockDelay } from '@/services';
import { readGrantedAuthority, resetAuthorityMock } from '../data/authority.mock';
import { AuthorityScreen } from './AuthorityScreen';

// Jest cannot load the Ionicons font file; the icons are decorative here (back arrow, lock).
jest.mock('@expo/vector-icons', () => {
  const { View } = jest.requireActual<typeof import('react-native')>('react-native');
  return { Ionicons: ({ name }: { name: string }) => <View testID={`icon-${name}`} /> };
});

beforeEach(() => {
  resetMockConfig();
  setMockDelay(0);
  resetAuthorityMock();
});

async function renderScreen(onStart = jest.fn()) {
  await render(<AuthorityScreen taskId="demo" onStart={onStart} onBack={jest.fn()} />);
  await screen.findByText('Beemy neyi yapabilir?');
  return onStart;
}

describe('21 · Authority setup (BM-013)', () => {
  it('shows every "Must keep" text', async () => {
    await renderScreen();
    for (const text of [
      'Yetki',
      'Beemy neyi yapabilir?',
      'Bu yetki yalnızca bu görev için geçerli.',
      'İzinli eylemler',
      'Ödeme yap',
      'Belgeyi başka kişiyle paylaş',
      'Sınırlar',
      'Alıcı',
      'Paylaşılabilir',
      'Geçerlilik',
      'Tutar üst sınırı',
      'Bağlayıcı işlemlerde',
      'Görevi devret',
      'Her işlemden önce sor',
      'Yetkiyi ver ve başlat',
    ]) {
      expect(screen.getByText(text)).toBeTruthy();
    }
  });

  it('shows the limits of the sample task', async () => {
    await renderScreen();
    expect(screen.getByText('Yalnızca ilan sahibi şirket')).toBeTruthy();
    expect(screen.getByText('CV_en.pdf · e-posta')).toBeTruthy();
    expect(screen.getByText('0 TL')).toBeTruthy();
  });

  it('"Ödeme yap" and "Belgeyi başka kişiyle paylaş" are off by default, the others on', async () => {
    await renderScreen();
    expect(screen.getByRole('switch', { name: 'Ödeme yap' })).not.toBeChecked();
    expect(screen.getByRole('switch', { name: 'Belgeyi başka kişiyle paylaş' })).not.toBeChecked();
    expect(screen.getByRole('switch', { name: 'İlan ara ve karşılaştır' })).toBeChecked();
    expect(screen.getByRole('switch', { name: 'CV ve başvuru mesajı hazırla' })).toBeChecked();
    expect(screen.getByRole('switch', { name: 'Başvuruyu gönder' })).toBeChecked();
  });

  it('"Görevi devret" (B) is selected by default; "Her işlemden önce sor" switches to A', async () => {
    const onStart = await renderScreen();
    expect(screen.getByRole('radio', { name: 'Görevi devret' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'Her işlemden önce sor' })).not.toBeChecked();

    await fireEvent.press(screen.getByRole('radio', { name: 'Her işlemden önce sor' }));
    expect(screen.getByRole('radio', { name: 'Her işlemden önce sor' })).toBeChecked();

    await fireEvent.press(screen.getByRole('button', { name: 'Yetkiyi ver ve başlat' }));
    await screen.findByText('Beemy neyi yapabilir?');
    expect(onStart).toHaveBeenCalledTimes(1);
    expect(onStart.mock.calls[0][0]).toMatchObject({ taskId: 'demo', condition: 'A' });
  });

  it('"Yetkiyi ver ve başlat" stores the authority with the task, with the switches as set', async () => {
    const onStart = await renderScreen();
    await fireEvent(screen.getByRole('switch', { name: 'Başvuruyu gönder' }), 'valueChange', false);
    expect(screen.getByRole('switch', { name: 'Başvuruyu gönder' })).not.toBeChecked();

    await fireEvent.press(screen.getByRole('button', { name: 'Yetkiyi ver ve başlat' }));
    await screen.findByText('Beemy neyi yapabilir?');

    expect(onStart).toHaveBeenCalledTimes(1);
    const stored = readGrantedAuthority('demo');
    expect(stored).toBeDefined();
    expect(stored?.condition).toBe('B');
    expect(stored?.grantedAt).toEqual(expect.any(String));
    const enabled = Object.fromEntries((stored?.actions ?? []).map((a) => [a.kind, a.enabled]));
    expect(enabled).toEqual({
      search: true,
      prepare_document: true,
      send: false,
      pay: false,
      share_document: false,
    });
    expect(onStart.mock.calls[0][0]).toEqual(stored);
  });

  it('shows the loading state first', async () => {
    setMockDelay(50);
    await render(<AuthorityScreen taskId="demo" onStart={jest.fn()} onBack={jest.fn()} />);
    expect(screen.getByText('Yetki hazırlanıyor…')).toBeTruthy();
    expect(await screen.findByText('Beemy neyi yapabilir?')).toBeTruthy();
  });

  it('shows the error state and recovers with "Tekrar dene"', async () => {
    failNextCall('execution', 'Yetki bilgisi alınamadı.');
    await render(<AuthorityScreen taskId="demo" onStart={jest.fn()} onBack={jest.fn()} />);
    expect(await screen.findByText('Yetki bilgisi alınamadı.')).toBeTruthy();
    expect(screen.queryByText('Yetkiyi ver ve başlat')).toBeNull();

    await fireEvent.press(screen.getByRole('button', { name: 'Tekrar dene' }));
    expect(await screen.findByText('Beemy neyi yapabilir?')).toBeTruthy();
  });

  it('shows an error under the button when saving fails, and nothing is stored', async () => {
    const onStart = await renderScreen();
    failNextCall('execution', 'Yetki kaydedilemedi.');
    await fireEvent.press(screen.getByRole('button', { name: 'Yetkiyi ver ve başlat' }));
    expect(await screen.findByText('Yetki kaydedilemedi.')).toBeTruthy();
    expect(onStart).not.toHaveBeenCalled();
    expect(readGrantedAuthority('demo')).toBeUndefined();
  });
});
