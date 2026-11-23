# Melike Şahin · Hesap, ana sayfa ve kişiselleştirme

Branch: `Melike-Sahin` · Klasör: `src/features/start-profile/` · Ekranlar: 01–17 (17 ekran)

Story metinleri ve kabul kriterleri: [Beemy User Stories](https://docs.google.com/document/d/1XFCXvD4Xdgg8F5-E7xZxtN1Ssb3-WIasOo5_zK9tRPE/edit) (bölüm 5, her story'de **Must have** ve **Nice to have**). İlerleme: [Beemy Sprint Tracker](https://docs.google.com/spreadsheets/d/1AuI4b5pgHaM7udlu4D6gXL_6OZD1MRKYwqPxG9lWOa8/edit). Tasarım: [Figma · Beemy · Ekranlar v6](https://www.figma.com/design/ZYNjpU7NGvws9wkmFaVq9k/?node-id=2222-1077). Rota listesi: [`docs/screens.md`](../../../docs/screens.md).

Ekran dosyasının adı, Figma frame adı (`NN · BM-xxx · Ekran · Sahibi`) ve story başlığı aynıdır. PR başlığı: `feat(BM-xxx): <story başlığı>`.

Uygulama varsayılan olarak İngilizce, Türkçe tam destekli. Ekrandaki metinler `en.json` ve `tr.json` dosyalarından gelir; tırnak içindeki İngilizce metinler aynen kullanılır.

## Ekranlarım

| No | Figma frame | Rota | Sprint | Maskot | Dosya |
|---|---|---|---|---|---|
| 01 | 01 · BM-007 · Welcome · Melike | `/onboarding` | 1 | Welcome, original colour | `screens/WelcomeScreen.tsx` |
| 02 | 02 · BM-008 · Language · Melike | `/onboarding/language` | 2 | Welcome, original colour | `screens/LanguageScreen.tsx` |
| 03 | 03 · BM-009 · Sign up · Melike | `/auth/sign-up` | 2 | Welcome, original colour | `screens/SignUpScreen.tsx` |
| 04 | 04 · BM-017 · Verify code · Melike | `/auth/verify` | 3 | Asking, original colour | `screens/VerifyCodeScreen.tsx` |
| 05 | 05 · BM-018 · Log in · Melike | `/auth/log-in` | 3 | Welcome, original colour | `screens/LogInScreen.tsx` |
| 06 | 06 · BM-019 · Forgot password · Melike | `/auth/forgot-password` | 3 | Thinking, original colour | `screens/ForgotPasswordScreen.tsx` |
| 07 | 07 · BM-025 · Permissions and data sources · Melike | `/onboarding/permissions` | 4 | Welcome, original colour | `screens/PermissionsAndDataSourcesScreen.tsx` |
| 08 | 08 · BM-026 · Voice introduction · Melike | `/onboarding/about-you` | 4 | Listening, original colour | `screens/VoiceIntroductionScreen.tsx` |
| 09 | 09 · BM-031 · Home · Melike | `/home` | 5 | Welcome, original colour | `screens/HomeScreen.tsx` |
| 11 | 11 · BM-032 · Profile · Melike | `/profile` | 5 | Welcome, original colour | `screens/ProfileScreen.tsx` |
| 12 | 12 · BM-039 · What I learned · Melike | `/profile/learned` | 6 | Remembering, original colour | `screens/WhatILearnedScreen.tsx` |
| 14 | 14 · BM-040 · Connected sources · Melike | `/profile/sources` | 6 | Researching, original colour | `screens/ConnectedSourcesScreen.tsx` |
| 16 | 16 · BM-041 · Settings and account · Melike | `/profile/settings` | 6 | Welcome, original colour | `screens/SettingsAndAccountScreen.tsx` |
| 10 | 10 · BM-049 · For you · Melike | `/home/for-you` | 7 | Researching, original colour | `screens/ForYouScreen.tsx` |
| 13 | 13 · BM-051 · Decision twin · Melike | `/profile/decision-twin` | 7 | Comparing, original colour | `screens/DecisionTwinScreen.tsx` |
| 15 | 15 · BM-050 · Notification and automation rules · Melike | `/profile/rules` | 7 | Thinking, original colour | `screens/NotificationAndAutomationRulesScreen.tsx` |
| 17 | 17 · BM-064 · Evaluation summary · Melike | `/research/summary` | 8 | Comparing, mood colour | `screens/EvaluationSummaryScreen.tsx` |

## Ekran başına olmazsa olmazlar (özet)

Tam liste ve “Nice to have” fikirleri story dokümanında. Bu özet PR kontrolü içindir.

### 01 · BM-007 · Welcome

_As a new user, I want to understand what Beemy does in one look, so that I know why I should start._

- [ ] Title “Hand it off. Beemy gets it done.” and the line “Say what you need. I plan it, ask before I act and finish the job.”
- [ ] Mascot in its original colour, Welcome mood
- [ ] Buttons “Get started” → 02 and “I already have an account” → 05
- [ ] Language pill “EN · TR” opens 02
- [ ] Page dots for 3 short intro slides

### 02 · BM-008 · Language

_As a user, I want to pick English or Turkish, so that Beemy speaks my language._

- [ ] Title “Which language should I speak?” and step text “Step 1 of 4”
- [ ] Cards “English · Default app language” and “Türkçe · Full Turkish support”, one selected at a time
- [ ] Note “I understand voice in both languages, even when you mix them.”
- [ ] “Continue” saves the language and opens 03
- [ ] The whole app switches language right away

### 03 · BM-009 · Sign up

_As a new user, I want to create an account quickly, so that my tasks and permissions are saved._

- [ ] Fields Full name, Email and Password with show/hide eye
- [ ] Checkbox “I agree to the Terms and Privacy Policy” must be ticked
- [ ] “Create account” → 04; errors under the field (empty, bad email, password under 8 characters)
- [ ] Buttons “Google” and “Apple” (simulated sign-in)
- [ ] Link “Already have an account? Log in” → 05

### 04 · BM-017 · Verify code

_As a new user, I want to confirm my email with a code, so that my account is safe._

- [ ] Title “Check your email” and the email address in the text
- [ ] 6 code boxes; focus jumps to the next box; paste fills all
- [ ] “Resend code in 0:42” counts down, then becomes a link
- [ ] “Verify” → 07 when the code is right; wrong code shows an error and clears the boxes
- [ ] Mascot in its original colour

### 05 · BM-018 · Log in

_As a returning user, I want to log in fast, so that I can continue my tasks._

- [ ] Fields Email and Password with show/hide
- [ ] “Forgot password?” → 06
- [ ] “Log in” → 09 Home; wrong password shows an error
- [ ] “Continue with Google” (simulated)
- [ ] Link “New here? Create an account” → 03

### 06 · BM-019 · Forgot password

_As a user who forgot the password, I want a reset link, so that I can get back in._

- [ ] Title “Forgot your password?”
- [ ] Email field with validation
- [ ] “Send reset link” shows a success message even if the email is unknown (no account leak)
- [ ] Note “The link works for 30 minutes. Check spam if you don't see it.”
- [ ] “Back to log in” → 05

### 07 · BM-025 · Permissions and data sources

_As a new user, I want to choose what Beemy may read, so that I share only what I want._

- [ ] Title “What can I use?” and “Step 2 of 4”
- [ ] Rows Microphone, Calendar, Email (read only), Contacts, Location with switches
- [ ] Payments row shows “Ask first” and cannot be switched to automatic here
- [ ] “Continue” → 08; nothing is read before the switch is on
- [ ] Mascot in its original colour

### 08 · BM-026 · Voice introduction

_As a new user, I want to tell Beemy about myself by voice, so that it learns my preferences quickly._

- [ ] Title “Tell me about yourself” and “Step 3 of 4”
- [ ] Quote card with my words and chips “I learned …” (each can be removed)
- [ ] Mascot Listening in its original colour
- [ ] Stop button “Tap when you're done” → 09; “Skip” → 09
- [ ] Learned items are saved to What I learned (12)

### 09 · BM-031 · Home

_As a user, I want a home screen that tells me what Beemy is doing and what needs me, so that I can act in seconds._

- [ ] Greeting with the name and “I'm on 3 tasks for you today.” plus “One needs your OK.”
- [ ] Mascot in its original colour inside the indigo panel
- [ ] Mic button on the panel edge → 18
- [ ] “Next step” card (lavender) with the action, details and an arrow
- [ ] Two cards: This week (% and ring) and Saved (₺ amount)
- [ ] Tab bar with Home active

### 11 · BM-032 · Profile

_As a user, I want my profile and the things Beemy knows in one place, so that I can check and change them._

- [ ] Avatar, name and “With Beemy since … · English”
- [ ] Cards Tasks done, Time saved, Saved
- [ ] Rows What I learned (12), Decision twin (13), Connected sources (14), Rules (15), Permissions (50)
- [ ] Settings icon → 16
- [ ] Mascot in its original colour; tab bar with Profile active

### 12 · BM-039 · What I learned

_As a user, I want to see and fix what Beemy learned about me, so that its choices stay right._

- [ ] Title “12 things about you” and tabs Travel / Food / Money
- [ ] Each fact shows a confidence pill (e.g. “95% sure”) and where it came from
- [ ] Buttons “Correct it” (voice or text) and “Forget”
- [ ] Forget removes the fact everywhere and writes a log entry
- [ ] Mascot in its original colour

### 14 · BM-040 · Connected sources

_As a user, I want to see and manage connected sources, so that I know what Beemy can read._

- [ ] Title “4 connected”, mascot in its original colour
- [ ] Rows with source name, what is read and last sync; pill Connected or Connect
- [ ] Connect opens a simulated sign-in
- [ ] Note “Disconnect anytime. I delete copies within 24 hours.”
- [ ] Disconnect asks for confirmation

### 16 · BM-041 · Settings and account

_As a user, I want simple settings, so that I can change language, voice and privacy._

- [ ] Language switch English / Türkçe that changes the app right away
- [ ] Voice: Beemy's voice choice and “Wake with ‘Hey Beemy’” switch
- [ ] Privacy: Data and privacy, Export my data
- [ ] “Log out” and “Delete account” (red, needs confirmation)
- [ ] Mascot in its original colour

### 10 · BM-049 · For you

_As a user, I want Beemy to point out small wins, so that I save time and money without asking._

- [ ] Title “I noticed 3 things”, mascot in its original colour
- [ ] Each card: tag (Save, Price drop, Routine), one sentence, one detail and two buttons
- [ ] Actions go through normal approval rules
- [ ] “Not now” hides the card for 7 days
- [ ] Insights come only from connected sources (14)

### 13 · BM-051 · Decision twin

_As a user, I want to see how Beemy decides like me, so that I can tune it._

- [ ] Title “I choose like you 9 out of 10 times”, mascot in its original colour
- [ ] Sliders Price vs comfort, Speed vs savings, Ask me vs decide
- [ ] Card “Last 30 days: 27 of 30 choices matched yours” with a small chart
- [ ] Changing a slider changes how options are ranked (24)

### 15 · BM-050 · Notification and automation rules

_As a user, I want rules like “tell me when a price drops”, so that Beemy acts the way I want._

- [ ] Title “4 rules running”, mascot in its original colour
- [ ] Each rule: condition and “→ action” with a switch
- [ ] Quiet hours rule lets only urgent approvals through
- [ ] “New rule” and mic to add a rule by voice
- [ ] Rules that spend money still follow the permission limits (50)

### 17 · BM-064 · Evaluation summary

_As a researcher, I want the main results on one screen, so that I can present them._

- [ ] Main number “87%” with what it means
- [ ] Cards Approvals asked, Unsafe actions blocked, Avg. time, User trust
- [ ] Bars by scenario domain
- [ ] Numbers come from the run records (51), not typed in
- [ ] Mascot in Comparing mood colour

## Diğer story'lerim

| ID | Story | Sprint | Dosyalar |
|---|---|---|---|
| BM-005 | Scenario schema and scoring rules | 1 | `eval/schema/scenario.ts`, `eval/schema/scoring.md` |
| BM-010 | Mascot component with mood colours | 2 | `src/components/Mascot.tsx`, `assets/mascot/` |
| BM-060 | Bilingual UI review and accessibility | 7 | `docs/accessibility-review.md` |
| BM-065 | Error, loading and empty states | 8 | `src/components/StateView.tsx` |
| BM-081 | Primary and secondary metrics per language | 10 | `eval/analysis/metrics.py` |
| BM-082 | Paired bootstrap confidence intervals | 10 | `eval/analysis/bootstrap.py` |

Ortak story'ler (ekipçe): BM-014 Cross-check expected results and translations, BM-023 Test plan and acceptance checks, BM-061 One end-to-end flow per domain, BM-062 Freeze scenario set v1.0 and split pilot inputs, BM-063 Pilot runs and fixes, BM-074 Run the 360 evaluation runs, BM-075 Bug fixing and stabilisation, BM-084 Demo build polish, BM-085 Re-runnable scenario pack and analysis scripts.

## Maskot kuralı

- Ana ekranlarda (onboarding, hesap, Home, Tasks, Log, Profile) maskot **orijinal mor-mavi** renginde: `<Mascot mood="…" tinted={false} />`.
- Görev ve durum ekranlarında maskot **duygu renginde**: `tinted={true}` (Listening turkuaz, Waiting for approval turuncu, Asking sarı, Done yeşil, No result gri).
- Hangi ekranda hangi duygu olduğu yukarıdaki tabloda yazıyor.

## Klasör yapısı

```
src/features/start-profile/
  screens/      her ekran için bir dosya, adı Screen.tsx ile biter (+ *.test.tsx)
  components/   yalnızca bu klasörde kullanılan parçalar
  data/         mock veri (*.mock.ts)
  lib/          arayüzsüz mantık + *.test.ts
  types.ts      yalnızca bu klasörün tipleri
  index.ts      ekranları dışa aktarır (app/ rotaları buradan import eder)
  README.md     bu dosya
```

## Kurallar

- Sadece kendi klasöründe çalış. Ortak dosyalar (`app/_layout.tsx`, `src/theme/`, `src/components/`, `src/types/`, `src/services/`, `src/i18n/`) Ezgi'nin onayladığı PR ile değişir.
- Her ekranın loading, empty ve error hali olmalı.
- Para, mesaj gönderme ve veri paylaşımı gibi bağlayıcı işler her zaman execution layer'dan geçer; ekran doğrudan araç çağırmaz.
- Araştırma modunda simüle edilen işlemler “Simulation · synthetic data” rozetini gösterir.
- `main` güncellenince: `git pull origin main`.
