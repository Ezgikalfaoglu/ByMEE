# Beemy: Ekip Kurulum ve Entegrasyon Rehberi

**Tek repo, tek lockfile, tek tasarım sistemi, 51 mobil ekran.** Beemy, TÜBİTAK 2209-A önerisi “Kişisel Yapay Zekâ Asistanlarında Görev Devri ve Yetki Denetimi”nin prototipidir.

User story'ler: [Beemy User Stories](https://docs.google.com/document/d/1Xb_IfONw5j9WiAaj7AdW68IzL1zRA8XK0xzPr3ZsLLw/edit) · İlerleme: [Beemy Sprint Tracker](https://docs.google.com/spreadsheets/d/1AuI4b5pgHaM7udlu4D6gXL_6OZD1MRKYwqPxG9lWOa8/edit) · Ekranlar: [Figma · Beemy · Ekranlar v6](https://www.figma.com/design/ZYNjpU7NGvws9wkmFaVq9k/?node-id=2222-1077) · Özet: [`docs/requirements.md`](docs/requirements.md), [`docs/user-stories.md`](docs/user-stories.md), [`docs/screens.md`](docs/screens.md)

## Ortak teknoloji ve sürüm sözleşmesi (üç kişi için zorunlu)

| Araç | Standart |
|---|---|
| Node.js | **22.14.0** (tüm ekip) |
| npm | **10.9.2** (tüm ekip) |
| IDE | Visual Studio Code (stable) |
| Git | Git + GitHub, aynı merkezi repo |
| Framework | React Native + Expo + Expo Router + TypeScript |
| Paket yöneticisi | **npm** (yarn/pnpm/bun kullanma) |
| Expo SDK / React / React Native | **Expo SDK 58**, React 19.3, React Native 0.88. `package-lock.json` ile kilitli |
| Test | Jest (`jest-expo`) + React Native Testing Library |
| UI tasarımı | Figma sayfası “Beemy · Ekranlar v6 (EN + TR, maskot, ses ve görev odaklı)”, “Beemy renkler” değişkenleri |
| Dil | Uygulama varsayılan olarak İngilizce, Türkçe tam destekli (`src/i18n/en.json`, `tr.json`) |

**Önemli:** Node ve npm sürümleri sabittir. Expo SDK, React ve React Native sürümlerini PM seçti ve `package-lock.json` ile kilitledi. `npx expo install --check` ile doğrula. Kimse kendi başına `expo@latest`, `react-native@latest`, `npm update`, `npm audit fix --force` veya `npx create-expo-app` çalıştırmamalı. PM'nin onayladığı yükseltme tek PR'da yapılır.

### Her bilgisayarda aynı kurulum

**Mac (Melike ve Berfin):** VS Code, Git ve nvm kur. nvm kurulumunu [nvm-sh/nvm](https://github.com/nvm-sh/nvm) resmi yönergesinden yap; Terminal'i yeniden aç. Git için Xcode Command Line Tools kurulumu gerekebilir (`xcode-select --install`).

```bash
nvm install 22.14.0
nvm use 22.14.0
node -v
npm -v
```

**Windows (Eda):** VS Code, Git for Windows ve **nvm-windows** kur ([coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)). Terminali yeniden aç. VS Code terminalinde **Command Prompt (cmd)** seç; PowerShell'de `npm.ps1` engeli olursa güvenlik ayarlarını gevşetme.

```bat
nvm install 22.14.0
nvm use 22.14.0
node -v
npm -v
```

**Her iki sistemde:** `node -v` çıktısı `v22.14.0`, `npm -v` çıktısı `10.9.2` olmalı. npm farklıysa PM'ye bildir; sürüm değişikliğini ekipçe kararlaştırın. Telefon için Expo Go kullanılabilir; Expo SDK ile uyumsuzluk varsa PM'nin belirlediği Expo development build kullanılmalı. Mac için Xcode/iOS Simulator **isteğe bağlıdır**; Eda Windows'ta iOS Simulator çalıştıramaz, Android cihaz veya emulator kullanır.

### GitHub deposunu ilk kez alma

```bash
git clone https://github.com/Ezgikalfaoglu/ByMEE.git   # repo adı aynı kaldı
cd ByMEE
git checkout <kendi-branch-in>    # Melike-Sahin, Eda-Uluçay veya Berfin-Ozcelik
node -v
npm -v
npm ci
npx expo install --check
npx expo start
```

### Komutlar

| Komut | Ne yapar |
|---|---|
| `npm start` | Expo'yu başlatır (QR kodu Expo Go ile okut) |
| `npm run typecheck` | TypeScript kontrolü |
| `npm test` | Unit testler (`lib/` içindeki `*.test.ts` dosyaları) |
| `npm run check` | Paket sürümlerinin SDK 58 ile uyumunu kontrol eder |

PR açmadan önce `npm run typecheck` ve `npm test` geçmeli.

### Klasör yapısı

```
app/                    Expo Router rotaları (BM-006, Eda) · rota listesi: docs/screens.md
src/theme/              renkler, font, boşluklar (Ezgi, Figma ile aynı)
src/components/         ortak componentler (Ezgi)
src/types/              ortak tipler (BM-004 görev tanımı, Eda)
src/services/           mock temeli (BM-003, Berfin)
src/utils/              formatMoney() gibi yardımcılar (BM-003, Berfin)
src/features/start-profile/   Melike, ekran 01-17 (hesap, ana sayfa, kişiselleştirme)
src/features/task-tools/      Eda, ekran 18-34 (ses, görev yürütme, araştırma, iletişim)
src/features/authority/       Berfin, ekran 35-51 (yetki, onay, tamamlama, otomasyon, kayıt)
docs/                   gereksinimler, user story dizini, ekran listesi (Ezgi)
```

Import'larda `@/` kısayolu `src/` klasörünü gösterir: `import { Button } from '@/components';`

`npm ci` hata verirse `package-lock.json` dosyasını silme veya `npm install` ile yeniden oluşturma; PM'ye hata çıktısını gönder. `npm ci` temiz kurulum yapar ve kilitli sürümlere uyar. `package.json`, `package-lock.json`, `.nvmrc`, `app/_layout.tsx` ve ortak tema dosyaları yalnızca PM onayıyla değiştirilir.

### Ortak tasarım sistemi

- Renkler Figma'daki “Beemy renkler” koleksiyonuyla aynı (`src/theme/colors.ts`): `primary #4B3FD6`, `ink #1B1530`, `bg #F6F5FB`, `success #1E9E63`, `warn #E07A12`, `amber #B98204`, `danger #D23C68`, `info #2F7FE0` ve her birinin soft hali.
- v6 renk blokları: üst paneller `nightSoft #2A2470` (indigo), `blue #3D7BFA`, `mint #4FD8B0`, `cream #FFF1DB`; vurgu `violet #7C5CFA` (mikrofon). Kartlar çerçevesiz, butonlar düz indigo, gradyan yok.
- Maskot: ana ekranlarda (onboarding, hesap, Home, Tasks, Log, Profile) orijinal mor-mavi renginde; görev ve durum ekranlarında duygu renginde (`<Mascot mood="…" tinted />`, BM-010).
- Anlamları: primary Beemy ve ana aksiyonlar, **warn ve amber kullanıcıyı bekleyen işler** (onay, soru), success tamamlandı, danger engellendi veya hata, info bilgi.
- Font: **Plus Jakarta Sans** (`@expo-google-fonts/plus-jakarta-sans`, `app/_layout.tsx` içinde yükleniyor).
- 390 × 844 referans mobil frame, 24 px yatay boşluk, 8 px spacing, 18 px kart radius. Gövde yazısı en az 14 pt, dokunma alanı en az 44 × 44.
- `src/components/` içindeki ortak parçaları kullan: `Screen`, `ScreenHeader`, `AppText`, `Button`, `Card`, `Chip`, `Tag`, `TextField`, `ListRow`, `StateView`, `useToast`, `confirm`. İkonlar için `@expo/vector-icons` (outline).
- Araştırma modunda simüle edilen her işlemde “Simulation · synthetic data” rozeti görünür (Türkçe: “Simülasyon · sentetik veri”).
- Her ekran Figma'daki aynı numaralı frame ile eşleşir: `NN · BM-xxx · Ekran adı · Sahibi`.

## Ekip

| Kişi | Sistem | Branch | Ekranlar |
|---|---|---|---|
| Melike Şahin | macOS | `Melike-Sahin` | 01–17 |
| Türkan Eda Uluçay | Windows | `Eda-Uluçay` | 18–34 |
| Ayşe Berfin Özçelik | macOS | `Berfin-Ozcelik` | 35–51 |
| Ezginur Kalfaoğlu (Proje yöneticisi) | Kendi sistemi | `main` | Ekran yok: repolar, main, dokümanlar, PR inceleme, final rapor |

## Proje kurulumu (PM)

- [x] Node `22.14.0` ve npm `10.9.2` ile tek Expo + TypeScript + Expo Router projesi (SDK 58)
- [x] `package.json`, `package-lock.json` ve `.nvmrc` (`22.14.0`) commit edildi
- [x] `src/theme/` (Figma renkleri, Plus Jakarta Sans, boşluklar) ve `src/components/` (ortak parçalar)
- [x] Her geliştiriciye kendi branch'inde ayrı klasör (`src/features/...`) ve içinde `README.md`
- [x] `docs/requirements.md`, `docs/user-stories.md`, `docs/screens.md`, PR ve bug şablonları
- [x] Temiz klonda `npm ci`, `npm run typecheck`, `npm test` ve Android bundle denendi
- [ ] GitHub'da `main` için branch protection ve zorunlu PR incelemesi
- [ ] Expo Go'yu ekip telefonlarında dene (SDK 58)

Navigasyon (dört sekme: Home, Tasks, Log, Profile; ilk açılış kontrolü; 51 rota) BM-006 ile Eda'da. `app/_layout.tsx` ve `app/index.tsx` şu an sadece projenin çalışması için geçici halde.

## Herkesin izleyeceği kurallar

- `npm ci` kullan, lockfile'ı elle düzenleme.
- Herkes VS Code, npm, Git/GitHub ve aynı Expo projesini kullanır.
- Yeni paket gerekirse PM'ye Issue aç; onay olmadan `npm install <paket>` yapma.
- Mac'te iOS Simulator isteğe bağlı; Windows'ta Android emulator veya fiziksel telefon kullan.
- Geliştiriciler kendi branch'lerinde ve kendi feature klasörlerinde çalışır. Ortak dosyalar (`app/_layout.tsx`, `src/theme/`, `src/components/`, `src/types/`, `src/services/`, `src/utils/`) yalnızca Ezgi'nin onayladığı PR ile değişir. Hangi ortak dosyayı kimin yazdığı yukarıdaki klasör yapısında.
- `main`'e doğrudan push yok. Her iş PR ile gelir, Ezgi inceler ve birleştirir.
- PR başlığında story ID ve hikâye adı olsun: `feat(BM-031): Home`. PR şablonundaki listeyi doldur.
- Her PR için ekran görüntüsü, çalıştırma adımları ve QA kanıtı ekle.
- `main` güncellenince kendi branch'ine al: `git pull origin main`.

## Kişisel README dosyaları

Her geliştiricinin branch'inde kendi klasörünün `README.md` dosyası var. İçinde ekranları, story ID'leri ve oluşturacağı dosyalar yazıyor:

- Melike: `src/features/start-profile/README.md`
- Eda: `src/features/task-tools/README.md`
- Berfin: `src/features/authority/README.md`
