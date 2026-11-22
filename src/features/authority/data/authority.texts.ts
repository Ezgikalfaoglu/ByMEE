/**
 * Texts of screen 21 Authority setup (BM-013).
 *
 * The "Must keep" lines are copied from the story word for word.
 * BM-006 (Eda) adds src/i18n/tr.json and en.json; these keys move there unchanged
 * and this file becomes a thin lookup, so the screen does not change.
 */
export const authorityTexts = {
  header: 'Yetki',
  title: 'Beemy neyi yapabilir?',
  scope: 'Bu yetki yalnızca bu görev için geçerli.',

  allowedActions: 'İzinli eylemler',
  pay: 'Ödeme yap',
  shareDocument: 'Belgeyi başka kişiyle paylaş',

  limits: 'Sınırlar',
  recipient: 'Alıcı',
  shareable: 'Paylaşılabilir',
  validUntil: 'Geçerlilik',
  amountCap: 'Tutar üst sınırı',

  bindingActions: 'Bağlayıcı işlemlerde',
  delegate: 'Görevi devret',
  askBeforeEach: 'Her işlemden önce sor',

  start: 'Yetkiyi ver ve başlat',

  loading: 'Yetki hazırlanıyor…',
  loadError: 'Yetki bilgisi yüklenemedi.',
  startError: 'Yetki kaydedilemedi. Tekrar dene.',
  retry: 'Tekrar dene',
  mascotLabel: 'Beemy düşünüyor',
} as const;
