# ByMEE: Ekip Kurulum ve Entegrasyon Rehberi

**Tek repo, tek lockfile, tek tasarım sistemi, 24 mobil ekran.**

User story'ler: [ByMEE User Stories](https://docs.google.com/document/d/1YOpgs57Em4j-3gEsBUu_N7C90nZ8SG8m8ZYjfuopw6g/edit) · İlerleme: [ByMEE Sprint Tracker](https://docs.google.com/spreadsheets/d/1AuI4b5pgHaM7udlu4D6gXL_6OZD1MRKYwqPxG9lWOa8/edit) · Özet: [`docs/requirements.md`](docs/requirements.md), [`docs/user-stories.md`](docs/user-stories.md)

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
| UI tasarımı | Ortak Figma dosyası, Indigo & Blush tasarım sistemi |

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
git clone https://github.com/Ezgikalfaoglu/ByMEE.git
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
app/                    Expo Router rotaları (BM-002, Eda)
src/theme/              renkler, font, boşluklar (Ezgi)
src/components/         ortak componentler (Ezgi)
src/types/              ortak tipler (BM-003, Berfin)
src/services/           servis arayüzleri ve mock'lar (BM-003, Berfin)
src/utils/              formatMoney() gibi yardımcılar (BM-003, Berfin)
src/store/              uygulama state'i, kayıt, eventler (BM-004, Eda)
src/features/personal-intelligence/   Melike, ekran 01-08
src/features/research-tasks/          Eda, ekran 09-16
src/features/voice-actions/           Berfin, ekran 17-24
docs/                   gereksinimler, test planı, raporlar (Ezgi)
```

Import'larda `@/` kısayolu `src/` klasörünü gösterir: `import { Button } from '@/components';`

`npm ci` hata verirse `package-lock.json` dosyasını silme veya `npm install` ile yeniden oluşturma; PM'ye hata çıktısını gönder. `npm ci` temiz kurulum yapar ve kilitli sürümlere uyar. `package.json`, `package-lock.json`, `.nvmrc`, `app/_layout.tsx` ve ortak tema dosyaları yalnızca PM onayıyla değiştirilir.

### Ortak tasarım sistemi

- Primary Indigo `#2E4A7D`, Blush Pink `#F6CDBD`, Soft Blue `#DCE6F1`, Warm Ivory `#FCF9F6`, Deep Indigo `#1F2E4D`.
- Her rengin tek anlamı var: Indigo ByMEE ve ana aksiyonlar, **Blush sadece gate'ler** (ByMEE kullanıcıyı bekliyor), Soft Blue bilgi, Ivory arka plan. Hatalar için ayrı kırmızı (`colors.danger`) var. Ayrıntılar dokümandaki Design direction sekmesinde.
- Font: **DM Sans** (`@expo-google-fonts/dm-sans`, `app/_layout.tsx` içinde yükleniyor).
- 390 × 844 referans mobil frame, 20 px yatay boşluk, 8 px spacing, 16 px kart radius. Gövde yazısı en az 14 pt, dokunma alanı en az 44 × 44.
- `src/theme/` ve `src/components/` içindeki ortak parçaları kullan: `Screen`, `ScreenHeader`, `AppText`, `Button`, `Card`, `Chip`, `Tag`, `TextField`, `ListRow`, `StateView`, `useToast`, `confirm`. İkonlar için `@expo/vector-icons` (Ionicons, outline). Ayrı bir UI kütüphanesi veya ikon paketi yükleme.
- Mesajlar (“Your profile is ready.” gibi) `useToast()` ile, iki butonlu sorular (“Discard your changes?” gibi) `confirm()` ile gösterilir.
- Robot, parıltı, çiçek, neon AI efekti kullanma; sade outline ikonlar ve ince modern çizgiler kullan.


## Ekip

| Geliştirici | Sistem | Branch | Ekranlar |
|---|---|---|---|
| Melike Şahin | macOS | `Melike-Sahin` | 01–08 |
| Eda Uluçay | Windows | `Eda-Uluçay` | 09–16 |
| Berfin Özçelik | macOS | `Berfin-Ozcelik` | 17–24 |
| Ezgi (PM / BA / QA) | Kendi sistemi | `main` | Proje kurulumu, tema, ortak componentler, dokümanlar, PR inceleme, test |

## Proje kurulumu (PM)

- [x] Node `22.14.0` ve npm `10.9.2` ile tek Expo + TypeScript + Expo Router projesi (SDK 58)
- [x] `package.json`, `package-lock.json` ve `.nvmrc` (`22.14.0`) commit edildi
- [x] `src/theme/` (Figma renkleri, DM Sans, boşluklar) ve `src/components/` (ortak parçalar)
- [x] Her geliştiriciye kendi branch'inde ayrı klasör (`src/features/...`) ve içinde `README.md`
- [x] `docs/requirements.md`, `docs/user-stories.md`, PR ve bug şablonları
- [x] Temiz klonda `npm ci`, `npm run typecheck`, `npm test` ve Android bundle denendi
- [ ] GitHub'da `main` için branch protection ve zorunlu PR incelemesi
- [ ] Expo Go'yu ekip telefonlarında dene (SDK 58)

Navigasyon (sekmeler, ilk açılış kontrolü, gate akışı) BM-002 ile Eda'da. `app/_layout.tsx` ve `app/index.tsx` şu an sadece projenin çalışması için geçici halde.

## Herkesin izleyeceği kurallar

- `npm ci` kullan, lockfile'ı elle düzenleme.
- Herkes VS Code, npm, Git/GitHub ve aynı Expo projesini kullanır.
- Yeni paket gerekirse PM'ye Issue aç; onay olmadan `npm install <paket>` yapma.
- Mac'te iOS Simulator isteğe bağlı; Windows'ta Android emulator veya fiziksel telefon kullan.
- Geliştiriciler kendi branch'lerinde ve kendi feature klasörlerinde çalışır. Ortak dosyalar (`app/`, `src/theme/`, `src/components/`, `src/types/`, `src/services/`, `src/utils/`, `src/store/`) yalnızca Ezgi'nin onayladığı PR ile değişir. Hangi ortak dosyayı kimin yazdığı yukarıdaki klasör yapısında.
- `main`'e doğrudan push yok. Her iş PR ile gelir, Ezgi inceler ve birleştirir.
- PR başlığında story ID olsun: `feat(BM-006): profile setup form`. PR şablonundaki listeyi doldur.
- Her PR için ekran görüntüsü, çalıştırma adımları ve QA kanıtı ekle.
- `main` güncellenince kendi branch'ine al: `git pull origin main`.

## Kişisel README dosyaları

Her geliştiricinin branch'inde kendi klasörünün `README.md` dosyası var. İçinde oluşturacağı dosyalar ve story ID'leri yazıyor:

- Melike: `src/features/personal-intelligence/README.md`
- Eda: `src/features/research-tasks/README.md`
- Berfin: `src/features/voice-actions/README.md`
