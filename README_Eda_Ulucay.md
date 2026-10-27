# Eda Uluçay — Developer README

**Proje:** Personal Assistant — Mobile UI Prototype  
**Sorumluluk:** Intelligent Research, Decision Matrix & Task Management  
**Bilgisayar:** Windows  
**Git branch:** `feature/eda-research-tasks-ui`  
**Dönem 1:** UI/UX + mock veriyle çalışan etkileşimli prototip  
**Dönem 2:** Onaylanan gerçek servis ve işlev entegrasyonları

> İlk dönemde gerçek telefon görüşmesi, e-posta/banka erişimi, gerçek rezervasyon veya dış sistemlerde eylem yapılmaz. Yalnızca açıkça etiketlenmiş simülasyonlar.

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


## Sorumlu olduğun sekiz ekran

| No | Ekran | Beklenen davranış / kabul kriteri |
|---|---|---|
| 09 | Home Dashboard | Günlük özet, hızlı aksiyonlar, görev durumu |
| 10 | Intelligent Research Request | Arama isteği, kriterler, doğrulama |
| 11 | Research Progress | Demo kaynak taraması ve ilerleme durumları |
| 12 | Research Results & Shortlist | Sonuç kartları, filtreleme, kaydetme |
| 13 | Weighted Decision Matrix | Kriter ağırlıkları, puanlama, sıralama ve gerekçe |
| 14 | Task Management Dashboard | Görev listesi, durum filtreleri |
| 15 | Task Details & Activity Timeline | Zaman çizelgesi, sonraki adım, kanıt alanları |
| 16 | Research Comparison | Yan yana seçenek karşılaştırma, farklılıkları gösterme |

**Teslim:** Sekiz ayrı gezilebilir ekran, mock data, TypeScript tipleri, boş/yükleniyor/hata/başarı durumları, çalışır butonlar, ekran görüntüleri ve PM incelemesine hazır Pull Request.

## Kod sahipliği ve klasör düzeni

Sadece `src/features/research-tasks/` içindeki ekran, component, mock ve type dosyalarını değiştir. Ortak navigation, theme, package dosyaları PM'ye aittir.

```text
src/features/research-tasks/
  screens/
  components/
  data/
  types.ts
  README.md
```

PM, Expo Router `app/` rotalarını senin ekranlarına bağlar. Başka geliştiricinin dosyasını değiştirme; ortak component eksikse GitHub Issue aç.

## Branch oluşturma ve günlük çalışma

İlk kez branch açarken:

```bash
git switch main
git pull origin main
git switch -c feature/eda-research-tasks-ui
```

Branch zaten varsa `git switch feature/eda-research-tasks-ui` kullan. Günlük başlangıçta `git status` ve `git branch --show-current` ile kontrol et. PM main'e değişiklik eklediğinde, önce kendi değişikliklerini commit et, sonra:

```bash
git switch main
git pull origin main
git switch feature/eda-research-tasks-ui
git merge main
npm ci
npx expo start
```

Merge conflict çıkarsa rastgele seçim yapma; PM ile çöz.

## Commit, push ve Pull Request

```bash
git status
git add src/features/research-tasks
git commit -m "feat: add intelligent research, decision matrix & task management screens"
git push -u origin feature/eda-research-tasks-ui
```

İlk push sonrası `git push` yeterli. GitHub → **Pull requests** → **New pull request** → base `main`, compare `feature/eda-research-tasks-ui` → ekran görüntüleri ve test adımlarıyla PR aç. PM onaylamadan merge etme.

**Güvenlik:** `.env`, API anahtarı, kişisel veri, gerçek ses kaydı, banka dökümü veya `node_modules` commit etme.

## Kontrol listesi

- [ ] Node `v22.14.0` ve npm `10.9.2` doğrulandı.
- [ ] Aynı GitHub deposu klonlandı; `npm ci` başarılı.
- [ ] `npx expo install --check` uyumlu.
- [ ] Sekiz ekran tasarımla tutarlı, navigasyon çalışıyor.
- [ ] Mock veriler açıkça belirtiliyor; gerçek dış eylem yok.
- [ ] Butonlar, form kontrolleri ve hata/boş durumları test edildi.
- [ ] Başka geliştiricinin veya PM'nin dosyası değiştirilmedi.
- [ ] PR, ekran görüntüleri ve test notlarıyla gönderildi.

## Dönem 2'ye hazırlık

Dönem 1 sonunda ekranları yeniden yazmadan gerçek servislere bağlanabilecek bir arayüz tasarla. Mock veriyi ekran koduna gömmek yerine `data/` altında tut; gerçek entegrasyon, kimlik doğrulama ve hassas izinler ancak PM'nin onayladığı ikinci dönem planıyla yapılır.
