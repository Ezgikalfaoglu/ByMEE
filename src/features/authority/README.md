# Ayşe Berfin Özçelik · Yetki, onay, tamamlama, otomasyon ve kayıtlar

Branch: `Berfin-Ozcelik` · Klasör: `src/features/authority/` · Ekranlar: 35–51 (17 ekran)

Story metinleri ve kabul kriterleri: [Beemy User Stories](https://docs.google.com/document/d/1XFCXvD4Xdgg8F5-E7xZxtN1Ssb3-WIasOo5_zK9tRPE/edit) (bölüm 5, her story'de **Must have** ve **Nice to have**). İlerleme: [Beemy Sprint Tracker](https://docs.google.com/spreadsheets/d/1AuI4b5pgHaM7udlu4D6gXL_6OZD1MRKYwqPxG9lWOa8/edit). Tasarım: [Figma · Beemy · Ekranlar v6](https://www.figma.com/design/ZYNjpU7NGvws9wkmFaVq9k/?node-id=2222-1077). Rota listesi: [`docs/screens.md`](../../../docs/screens.md).

Ekran dosyasının adı, Figma frame adı (`NN · BM-xxx · Ekran · Sahibi`) ve story başlığı aynıdır. PR başlığı: `feat(BM-xxx): <story başlığı>`.

Uygulama varsayılan olarak İngilizce, Türkçe tam destekli. Ekrandaki metinler `en.json` ve `tr.json` dosyalarından gelir; tırnak içindeki İngilizce metinler aynen kullanılır.

## Ekranlarım

| No | Figma frame | Rota | Sprint | Maskot | Dosya |
|---|---|---|---|---|---|
| 35 | 35 · BM-013 · Authority setup · Berfin | `/task/[id]/authority` | 2 | Thinking, mood colour | `screens/AuthorityScreen.tsx` |
| 36 | 36 · BM-021 · Approval before action · Berfin | `/task/[id]/approve` | 3 | Waiting for approval, mood colour | `screens/ApprovalBeforeActionScreen.tsx` |
| 39 | 39 · BM-022 · Voice question · Berfin | `/task/[id]/question` | 3 | Asking, mood colour | `screens/VoiceQuestionScreen.tsx` |
| 37 | 37 · BM-030 · Payment approval · Berfin | `/task/[id]/approve-payment` | 4 | Waiting for approval, mood colour | `screens/PaymentApprovalScreen.tsx` |
| 38 | 38 · BM-038 · Data sharing approval · Berfin | `/task/[id]/approve-data` | 5 | Asking, mood colour | `screens/DataSharingApprovalScreen.tsx` |
| 40 | 40 · BM-047 · Emergency stop · Berfin | `/task/[id]/stop` | 6 | No mascot | `screens/EmergencyStopScreen.tsx` |
| 42 | 42 · BM-048 · No valid option · Berfin | `/task/[id]/stopped` | 6 | No result, mood colour | `screens/NoValidOptionScreen.tsx` |
| 41 | 41 · BM-056 · Plan changed · Berfin | `/task/[id]/replan` | 7 | Thinking, mood colour | `screens/PlanChangedScreen.tsx` |
| 43 | 43 · BM-057 · New limit · Berfin | `/task/[id]/new-limit` | 7 | Waiting for approval, mood colour | `screens/NewLimitScreen.tsx` |
| 44 | 44 · BM-058 · Task completed · Berfin | `/task/[id]/result` | 7 | Done, mood colour | `screens/TaskCompletedScreen.tsx` |
| 45 | 45 · BM-070 · Activity log · Berfin | `/log` | 8 | Remembering, original colour | `screens/ActivityLogScreen.tsx` |
| 46 | 46 · BM-071 · Log entry details · Berfin | `/log/[entryId]` | 8 | Approved, mood colour | `screens/LogEntryDetailsScreen.tsx` |
| 50 | 50 · BM-072 · Permissions and approval rules · Berfin | `/profile/permissions` | 8 | Approved, original colour | `screens/PermissionsAndApprovalRulesScreen.tsx` |
| 51 | 51 · BM-073 · Run log · Berfin | `/research/run/[id]` | 8 | Comparing, mood colour | `screens/RunLogScreen.tsx` |
| 47 | 47 · BM-078 · Workflow discovery · Berfin | `/workflows/discover` | 9 | Remembering, mood colour | `screens/WorkflowDiscoveryScreen.tsx` |
| 48 | 48 · BM-079 · Teach by showing · Berfin | `/workflows/teach` | 9 | Remembering, mood colour | `screens/TeachByShowingScreen.tsx` |
| 49 | 49 · BM-080 · Learned workflows · Berfin | `/workflows` | 9 | Remembering, mood colour | `screens/LearnedWorkflowsScreen.tsx` |

> **35 Authority setup için not:** v3 sürümü bu branch'te hazır (`screens/AuthorityScreen.tsx`, testleriyle). Story ID değişmedi: **BM-013**. v6 tasarımına göre güncellemen yeterli: indigo panel ve maskot (Thinking, duygu rengi), büyük “₺5.000” limit kartı ve kaydırıcı, üç anahtar, “Valid for: This task / 7 days / Always” seçimi ve “Save permissions”. `lib/format.ts` ve `types.ts` aynen kullanılabilir.

## Ekran başına olmazsa olmazlar (özet)

Tam liste ve “Nice to have” fikirleri story dokümanında. Bu özet PR kontrolü içindir.

### 35 · BM-013 · Authority setup

_As a user, I want to set how much Beemy may do on its own, so that I keep control of money and data._

- [ ] Title “How much can I do on my own?”, mascot in Thinking mood colour
- [ ] Spending limit per action shown large (“₺5.000”) with a slider from ₺0 to ₺10.000
- [ ] Switches “Book under the limit without asking”, “Share my phone and email” (only with the hotel), “Pay with my saved card” (I always ask first)
- [ ] “Valid for”: This task / 7 days / Always
- [ ] “Save permissions” writes the rule to the execution layer and returns to 22

### 36 · BM-021 · Approval before action

_As a user, I want to approve a binding action before it happens, so that nothing is sent or paid without me._

- [ ] Mascot in Waiting for approval mood colour (orange)
- [ ] Title “Can I send this?” and the action in one line
- [ ] Rows What, To, File, Last check (fresh check time, green when fine)
- [ ] Text “This approval covers only this action.”
- [ ] Buttons “Approve and send”, “Change”, “Cancel”; every choice is written to the log (45)

### 39 · BM-022 · Voice question

_As a user, I want Beemy to ask me one clear question when something is missing, so that it doesn't guess._

- [ ] Mascot in Asking mood colour (yellow) and pill “Quick question”
- [ ] Question in large text and why it asks (“You picked window the last 7 times.”)
- [ ] 2–4 big answer cards; the usual choice is marked “Your usual”
- [ ] Answer by voice with the mic (“Or just say it”)
- [ ] Beemy does nothing in the task until the question is answered

### 37 · BM-030 · Payment approval

_As a user, I want a clear payment approval, so that I always know what I pay and why._

- [ ] Amount in large text (“₺650”) and what it is for
- [ ] Pill “Over your ₺500 auto limit” explains why it asks
- [ ] Rows Card (last 4 digits only), Seat, Leaves, Refund
- [ ] “Slide to pay ₺650” needs a full slide; “Cancel” stops
- [ ] Mascot in Waiting for approval mood colour; payment is simulated and logged

### 38 · BM-038 · Data sharing approval

_As a user, I want to choose which personal data is shared, so that I share only what is needed._

- [ ] Title “Share these with Acme HR?”, mascot in Asking mood colour
- [ ] Checklist: name, email, phone, file, address; items not needed are unticked with the reason
- [ ] Home address shows “Never shared without asking”
- [ ] Note “They get only what you tick. I log every share.”
- [ ] Button “Share 3 items” updates with the count; “Cancel”

### 40 · BM-047 · Emergency stop

_As a user, I want one big stop button, so that I can stop everything immediately._

- [ ] Title “Stop everything?” and “I'll pause all tasks right away and undo what I can.”
- [ ] Big red stop button; “Hold for 2 seconds” to confirm
- [ ] List of running and waiting tasks that will stop
- [ ] After stop: all tasks paused, undo where possible, log entry written
- [ ] “Cancel” returns

### 42 · BM-048 · No valid option

_As a user, I want Beemy to stop with a reason when nothing fits, so that it doesn't do something I didn't want._

- [ ] Title “I couldn't find a match”, mascot in No result mood colour (grey)
- [ ] “What blocked it” list with each failed constraint and the reason
- [ ] Suggestion chips to relax one constraint
- [ ] “Try with these changes” runs again; “Stop this task” ends it
- [ ] Beemy never relaxes a constraint without the user

### 41 · BM-056 · Plan changed

_As a user, I want to know when the plan changes and approve the new one, so that surprises don't cost me._

- [ ] Title “The plan changed” and the reason (e.g. airline cancelled)
- [ ] Before (crossed out) and Now with the price difference pill
- [ ] “What this changes” list: still fits / moved / needs your OK
- [ ] “Accept the new plan” and “Show other flights”
- [ ] Nothing changes before the user accepts

### 43 · BM-057 · New limit

_As a user, I want to raise a limit only for one task, so that Beemy can finish without changing my general rules._

- [ ] Title “This needs a higher limit”, mascot in Waiting for approval mood colour
- [ ] Now (crossed) → New limit with a slider
- [ ] Switches “Only for this task” and “Expires in 24 hours” on by default
- [ ] Text that Beemy still asks before paying
- [ ] “Set ₺700” and “Keep ₺500”

### 44 · BM-058 · Task completed

_As a user, I want a clear result with what was done and saved, so that I know the task is really finished._

- [ ] Title “Done!” with time saved; mascot in Done mood colour (green) and confetti
- [ ] Receipt card: status Confirmed, name, dates, Paid, Saved by price tracking, other items
- [ ] Shown only after the simulator record is verified (honest results)
- [ ] “I learned” card with one new preference (user can remove it in 12)
- [ ] Buttons “See the log” (→ 45) and “Home” (→ 09)

### 45 · BM-070 · Activity log

_As a user, I want a log of everything Beemy did, so that I can check and trust it._

- [ ] Title “28 actions today”, mascot in its original colour
- [ ] Filters All, Approved, Blocked, Automatic
- [ ] Timeline with what, time, who approved and a status pill
- [ ] Tap an entry → 46
- [ ] Tab bar with Log active

### 46 · BM-071 · Log entry details

_As a user, I want the full details of one action, so that I know exactly what happened._

- [ ] Rows Done by, Approved by, Amount, Data shared, Rule used
- [ ] My recorded words with a play button
- [ ] Undo window (e.g. free cancellation date)
- [ ] “Cancel booking” (red, approval rules) and “Report a problem”
- [ ] Header colour follows the result (green approved, pink blocked)

### 50 · BM-072 · Permissions and approval rules

_As a user, I want one place for all permissions, so that I can change them anytime._

- [ ] Cards Always ask over and Auto approve up to
- [ ] Rows Payments, Send emails, Calendar, Share personal data, Delete things with Ask / Auto / Never
- [ ] Never is red; Payments cannot be Auto above the limit
- [ ] Changes are logged
- [ ] “Permission history”

### 51 · BM-073 · Run log

_As a researcher, I want every step of a run, so that I can check violations and timing._

- [ ] Title “Run #24” and “18 of 20 passed” with scenario and version
- [ ] Tabs Steps, Simulator, Metrics
- [ ] Steps with time, result and blocked steps in red
- [ ] “Export JSON” and “Compare runs” (→ 34)

### 47 · BM-078 · Workflow discovery

_As a user, I want Beemy to notice my routines, so that I can automate them._

- [ ] Title “I spotted a routine” and how often it happened
- [ ] Steps of the routine
- [ ] “If you automate it” explains exactly what will happen
- [ ] “Automate it” → 49; “Not now”
- [ ] Automation still asks before paying

### 48 · BM-079 · Teach by showing

_As a user, I want to teach Beemy by doing a task once, so that it can repeat it._

- [ ] Pill “Recording 00:42” and title “Show me once”
- [ ] “What I saw” list with captured steps; the current step is marked
- [ ] Password fields are never recorded (note shown)
- [ ] Buttons Pause, Finish (red), Discard

### 49 · BM-080 · Learned workflows

_As a user, I want to see and switch my learned workflows, so that I stay in control._

- [ ] Title “3 learned workflows”
- [ ] Each card: name, trigger, switch and tags (runs, limits)
- [ ] Paused workflows shown with a Paused tag
- [ ] “Teach a new one” → 48 and mic

## Diğer story'lerim

| ID | Story | Sprint | Dosyalar |
|---|---|---|---|
| BM-003 | Shared data contracts and mock services ✓ | 1 | `src/services/mock/base.ts`, `src/services/mockConfig.ts`, `src/utils/formatMoney.ts` |
| BM-012 | Scenario drafts: shopping and returns, travel, daily appointments | 2 | `eval/scenarios/ALI-*.json`, `eval/scenarios/SEY-*.json`, `eval/scenarios/RAN-*.json` |
| BM-029 | Execution layer skeleton | 4 | `src/execution/executor.ts`, `src/execution/executor.test.ts` |
| BM-036 | Simulator core: reset, event triggers, records | 5 | `src/sim/simulator.ts`, `src/sim/records.ts` |
| BM-037 | Authority checks: action, recipient, data, time, amount | 5 | `src/execution/checks.ts`, `src/execution/checks.test.ts` |
| BM-045 | Re-check before binding action and transaction ID | 6 | `src/execution/recheck.ts`, `src/execution/idempotency.ts` |
| BM-046 | Condition A and B switch | 6 | `src/execution/policy.ts` |
| BM-059 | Edge case tests | 7 | `src/execution/edgeCases.test.ts` |

Ortak story'ler (ekipçe): BM-014 Cross-check expected results and translations, BM-023 Test plan and acceptance checks, BM-061 One end-to-end flow per domain, BM-062 Freeze scenario set v1.0 and split pilot inputs, BM-063 Pilot runs and fixes, BM-074 Run the 360 evaluation runs, BM-075 Bug fixing and stabilisation, BM-084 Demo build polish, BM-085 Re-runnable scenario pack and analysis scripts.

## Maskot kuralı

- Ana ekranlarda (onboarding, hesap, Home, Tasks, Log, Profile) maskot **orijinal mor-mavi** renginde: `<Mascot mood="…" tinted={false} />`.
- Görev ve durum ekranlarında maskot **duygu renginde**: `tinted={true}` (Listening turkuaz, Waiting for approval turuncu, Asking sarı, Done yeşil, No result gri).
- Hangi ekranda hangi duygu olduğu yukarıdaki tabloda yazıyor.

## Klasör yapısı

```
src/features/authority/
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
