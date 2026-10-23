# Personal Assistant — Ekip Kurulum ve Entegrasyon Rehberi

**Tek repo, tek lockfile, tek tasarım sistemi, 24 mobil ekran.**

## Ortak teknoloji ve sürüm sözleşmesi (üç kişi için zorunlu)

| Araç | Standart |
|---|---|
| Node.js | **22.14.0** (tüm ekip) |
| npm | **10.9.2** (tüm ekip) |
| IDE | Visual Studio Code (stable) |
| Git | Git + GitHub, aynı merkezi repo |
| Framework | React Native + Expo + Expo Router + TypeScript |
| Paket yöneticisi | **npm** (yarn/pnpm/bun kullanma) |
| Expo SDK / React / React Native | PM'nin `package.json` ve `package-lock.json` dosyalarındaki **aynı kilitli sürümler** |
| UI tasarımı | Ortak Figma dosyası, Indigo & Blush tasarım sistemi |

**Önemli:** Node ve npm sürümleri sabittir; Expo SDK/React/React Native için burada bağımsız sürüm numarası yazmıyoruz, çünkü bunların uyumlu kombinasyonunu PM tek sefer seçip `package-lock.json` ile kilitleyecek. `npx expo install --check` ile doğrula. Kimse kendi başına `expo@latest`, `react-native@latest`, `npm update`, `npm audit fix --force` veya `npx create-expo-app` çalıştırmamalı. PM'nin onayladığı yükseltme tek PR'da yapılır.

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
git clone <PM_TARAFINDAN_PAYLASILAN_REPO_URL>
cd personal-ai-assistant
node -v
npm -v
npm ci
npx expo install --check
npx expo start
```

`npm ci` hata verirse `package-lock.json` dosyasını silme veya `npm install` ile yeniden oluşturma; PM'ye hata çıktısını gönder. `npm ci` temiz kurulum yapar ve kilitli sürümlere uyar. `package.json`, `package-lock.json`, `.nvmrc`, `app/_layout.tsx` ve ortak tema dosyaları yalnızca PM onayıyla değiştirilir.

### Ortak tasarım sistemi

- Primary Indigo `#2E4A7D`, Blush Pink `#F6CDBD`, Soft Blue `#DCE6F1`, Warm Ivory `#FCF9F6`, Deep Indigo `#1F2E4D`.
- Font: **DM Sans**, alternatif Inter. Fontu PM projeye ekler; herkes aynı font dosyalarını kullanır.
- 390 × 844 referans mobil frame, 20 px yatay boşluk, 8 px spacing, 16 px kart radius.
- PM'nin `src/theme/` ve `src/components/` içindeki ortak butonlarını kullan. Ayrı bir UI kütüphanesi veya ikon paketi yükleme.
- Robot, parıltı, çiçek, neon AI efekti kullanma; sade outline ikonlar ve ince modern çizgiler kullan.


## Ekip

| Geliştirici | Sistem | Branch | Ekranlar |
|---|---|---|---|
| Melike Şahin | macOS | `feature/melike-profile-ui` | 01–08 |
| Eda Uluçay | Windows | `feature/eda-research-tasks-ui` | 09–16 |
| Berfin Özçelik | macOS | `feature/berfin-voice-actions-ui` | 17–24 |
| PM / QA | Kendi sistemi | `main` + PM feature branch | Repo, ortak tasarım, routing, PR, test |

## PM'nin ilk gün yapması gerekenler

1. Node `22.14.0` ve npm `10.9.2` ile **tek** Expo + TypeScript + Expo Router projesi oluştur.
2. Uyumlu Expo SDK, React ve React Native sürümlerini Expo'nun oluşturduğu proje ve `npx expo install` üzerinden seç; rastgele sürüm karıştırma.
3. `package.json` ve `package-lock.json` dosyalarını commit et. `.nvmrc` dosyasının içeriği yalnızca `22.14.0` olsun.
4. `src/theme/`, `src/components/` ve global navigation yapısını oluştur. Üç geliştiriciye ayrı klasör aç.
5. Figma tasarım tokenlarını projeye aktar; aynı ikon ve font paketlerini herkes ortak projeden alsın.
6. `npm ci`, `npx expo install --check`, `npx expo start` komutlarını temiz klonda test et.
7. GitHub'da branch protection ve PR incelemesi kullan. Paket güncellemesini yalnızca PM yapsın.
8. Expo Go ve SDK uyumluluğunu ekip cihazlarında test et; gerekiyorsa development build stratejisi belirle.

## Herkesin izleyeceği kurallar

- `npm ci` kullan, lockfile'ı elle düzenleme.
- Herkes VS Code, npm, Git/GitHub ve aynı Expo projesini kullanır.
- Yeni paket gerekirse PM'ye Issue aç; onay olmadan `npm install <paket>` yapma.
- Mac'te iOS Simulator isteğe bağlı; Windows'ta Android emulator veya fiziksel telefon kullan.
- Geliştiriciler yalnızca kendi feature klasörlerinde çalışır; global rotalar ve shared component'ler PM'ye aittir.
- Her PR için ekran görüntüsü, çalıştırma adımları ve QA kanıtı ekle.

## Ekip README dosyaları

- `README_Melike_Sahin.md`
- `README_Eda_Ulucay.md`
- `README_Berfin_Ozcelik.md`
