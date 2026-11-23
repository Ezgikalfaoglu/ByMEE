# Ayşe Berfin Özçelik · Sesli asistan, görev akışı, yetki, onay ve kayıtlar

Branch: `Berfin-Ozcelik` · Klasör: `src/features/assistant/`, `src/features/authority/` · Ekranlar: 18, 19, 21–23, 35–46 (17 ekran)

Story metinleri ve kabul kriterleri: [Beemy User Stories](https://docs.google.com/document/d/19EbWZJk7rDjSQbAETuhW1OGU2buwmElGMRwyxlVzG04/edit) (bölüm 5, her story'de **Must have** ve **Nice to have**). İlerleme: [Beemy Sprint Tracker](https://docs.google.com/spreadsheets/d/1AuI4b5pgHaM7udlu4D6gXL_6OZD1MRKYwqPxG9lWOa8/edit). Tasarım: [Figma · Beemy · Ekranlar v6](https://www.figma.com/design/ZYNjpU7NGvws9wkmFaVq9k/?node-id=2222-1077). Rota listesi: [`docs/screens.md`](../../../docs/screens.md).

Ekran dosyasının adı, Figma frame adı (`NN · BM-xxx · Ekran · Sahibi`) ve story başlığı aynıdır. PR başlığı: `feat(BM-xxx): <story başlığı>`.

Uygulama varsayılan olarak İngilizce, Türkçe tam destekli. Ekrandaki metinler `en.json` ve `tr.json` dosyalarından gelir; tırnak içindeki İngilizce metinler aynen kullanılır.

## Ekranlarım

| No | Figma frame | Rota | Sprint | Maskot | Dosya |
|---|---|---|---|---|---|
| 35 | 35 · BM-013 · Authority setup · Berfin | `/task/[id]/authority` | 2 | Thinking, mood colour | `authority/screens/AuthorityScreen.tsx` |
| 18 | 18 · BM-016 · Voice assistant · Berfin | `/voice` | 3 | Listening, mood colour | `assistant/screens/VoiceAssistantScreen.tsx` |
| 21 | 21 · BM-020 · Task summary · Berfin | `/task/[id]/summary` | 3 | Thinking, mood colour | `assistant/screens/TaskSummaryScreen.tsx` |
| 36 | 36 · BM-021 · Approval before action · Berfin | `/task/[id]/approve` | 3 | Waiting for approval, mood colour | `authority/screens/ApprovalBeforeActionScreen.tsx` |
| 39 | 39 · BM-022 · Voice question · Berfin | `/task/[id]/question` | 3 | Asking, mood colour | `authority/screens/VoiceQuestionScreen.tsx` |
| 19 | 19 · BM-024 · Type mode · Berfin | `/chat/[chatId]` | 4 | Thinking, mood colour | `assistant/screens/TypeModeScreen.tsx` |
| 37 | 37 · BM-030 · Payment approval · Berfin | `/task/[id]/approve-payment` | 4 | Waiting for approval, mood colour | `authority/screens/PaymentApprovalScreen.tsx` |
| 22 | 22 · BM-034 · Live plan · Berfin | `/task/[id]` | 5 | Researching, mood colour | `assistant/screens/LivePlanScreen.tsx` |
| 23 | 23 · BM-035 · Agents · Berfin | `/agents` | 5 | Researching, mood colour | `assistant/screens/AgentsScreen.tsx` |
| 38 | 38 · BM-038 · Data sharing approval · Berfin | `/task/[id]/approve-data` | 5 | Asking, mood colour | `authority/screens/DataSharingApprovalScreen.tsx` |
| 40 | 40 · BM-047 · Emergency stop · Berfin | `/task/[id]/stop` | 6 | No mascot | `authority/screens/EmergencyStopScreen.tsx` |
| 42 | 42 · BM-048 · No valid option · Berfin | `/task/[id]/stopped` | 6 | No result, mood colour | `authority/screens/NoValidOptionScreen.tsx` |
| 41 | 41 · BM-056 · Plan changed · Berfin | `/task/[id]/replan` | 7 | Thinking, mood colour | `authority/screens/PlanChangedScreen.tsx` |
| 43 | 43 · BM-057 · New limit · Berfin | `/task/[id]/new-limit` | 7 | Waiting for approval, mood colour | `authority/screens/NewLimitScreen.tsx` |
| 44 | 44 · BM-058 · Task completed · Berfin | `/task/[id]/result` | 7 | Done, mood colour | `authority/screens/TaskCompletedScreen.tsx` |
| 45 | 45 · BM-070 · Activity log · Berfin | `/log` | 8 | Remembering, original colour | `authority/screens/ActivityLogScreen.tsx` |
| 46 | 46 · BM-071 · Log entry details · Berfin | `/log/[entryId]` | 8 | Approved, mood colour | `authority/screens/LogEntryDetailsScreen.tsx` |

> **23 Kasım 2026 sahiplik güncellemesi:** Sesli asistan ve görev konuşma akışı sana geçti: 18 Voice assistant, 19 Type mode, 21 Task summary, 22 Live plan, 23 Agents ve ses katmanı BM-015 Voice input. 47–51 ve BM-046 Condition A and B switch Eda'ya geçti. Ekran numaraları, story ID'leri ve sprintler aynı.

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

### 18 · BM-016 · Voice assistant

_As a user, I want to just say what I need, so that I don't have to fill forms._

- [ ] Mascot in Listening mood colour (teal) and the status pill “Listening”
- [ ] Live transcript in large text; the part not yet confirmed is lighter
- [ ] Chips for understood facts (time, people, place, budget) with a check icon
- [ ] Buttons “Pause”, “Done” (→ 21) and “Attach”; “✕” closes, keyboard icon → 19
- [ ] Voice wave moves while the user speaks
- [ ] Works in English and Turkish, also mixed

### 21 · BM-020 · Task summary

_As a user, I want to see what Beemy understood before it starts, so that mistakes are fixed early._

- [ ] Title “Here's what I understood”, mascot in Thinking mood colour
- [ ] Rows Goal, When, Who, Budget, Must have, Avoid from the task definition (D)
- [ ] Note “I'll ask before paying anything over ₺5.000.” (from the permission rule)
- [ ] Tap a row to edit it, or press the mic to correct by voice
- [ ] “Looks good, start” → 35 if no permission is set yet, otherwise → 22

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

### 19 · BM-024 · Type mode

_As a user, I want to type instead of talk, so that I can use Beemy in quiet places._

- [ ] User bubbles on the right (indigo), Beemy bubbles on the left (white)
- [ ] Quick-reply chips under a Beemy question
- [ ] Inline result card with a “Book” button that goes through approval rules
- [ ] Input “Message Beemy…”, attach and send buttons; mic icon → 18
- [ ] Mascot in Thinking mood colour in the header

### 37 · BM-030 · Payment approval

_As a user, I want a clear payment approval, so that I always know what I pay and why._

- [ ] Amount in large text (“₺650”) and what it is for
- [ ] Pill “Over your ₺500 auto limit” explains why it asks
- [ ] Rows Card (last 4 digits only), Seat, Leaves, Refund
- [ ] “Slide to pay ₺650” needs a full slide; “Cancel” stops
- [ ] Mascot in Waiting for approval mood colour; payment is simulated and logged

### 22 · BM-034 · Live plan

_As a user, I want to watch my task progress live, so that I trust what Beemy is doing._

- [ ] Big counter “3/5” with “steps done · about 4 min left” and a 5-part step bar
- [ ] Mascot in Researching mood colour
- [ ] “Now” card with the agent and what it does (e.g. 3 hotel prices)
- [ ] Plan timeline: done, running, waiting for approval (amber “Approval”), next
- [ ] Buttons “Change the plan” and a red stop (→ 40)

### 23 · BM-035 · Agents

_As a user, I want to see which agents work on my task and what they may do, so that I understand who does what._

- [ ] Title “4 agents on your Antalya trip”, mascot in Researching mood colour
- [ ] Cards Calendar, Flights, Prices, Booking with status Done / Working / Needs you
- [ ] Card “What each agent may do” with limits (Booking up to ₺5.000, Messages drafts only, Payments always asks)
- [ ] Tap an agent → its steps in the log

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

## Diğer story'lerim

| ID | Story | Sprint | Dosyalar |
|---|---|---|---|
| BM-003 | Shared data contracts and mock services ✓ | 1 | `src/services/mock/base.ts`, `src/services/mockConfig.ts`, `src/utils/formatMoney.ts` |
| BM-012 | Scenario drafts: shopping and returns, travel, daily appointments | 2 | `eval/scenarios/ALI-*.json`, `eval/scenarios/SEY-*.json`, `eval/scenarios/RAN-*.json` |
| BM-015 | Voice input and spoken replies | 2 | `src/voice/useSpeech.ts`, `src/voice/speak.ts` |
| BM-029 | Execution layer skeleton | 4 | `src/execution/executor.ts`, `src/execution/executor.test.ts` |
| BM-036 | Simulator core: reset, event triggers, records | 5 | `src/sim/simulator.ts`, `src/sim/records.ts` |
| BM-037 | Authority checks: action, recipient, data, time, amount | 5 | `src/execution/checks.ts`, `src/execution/checks.test.ts` |
| BM-045 | Re-check before binding action and transaction ID | 6 | `src/execution/recheck.ts`, `src/execution/idempotency.ts` |
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

Sesli asistan ve görev akışı ekranları (18, 19, 21–23) aynı yapıyla `src/features/assistant/` klasörüne gelir. Bu README iki klasör için de geçerli.

## Kurallar

- Sadece kendi klasöründe çalış. Ortak dosyalar (`app/_layout.tsx`, `src/theme/`, `src/components/`, `src/types/`, `src/services/`, `src/i18n/`) Ezgi'nin onayladığı PR ile değişir.
- Her ekranın loading, empty ve error hali olmalı.
- Para, mesaj gönderme ve veri paylaşımı gibi bağlayıcı işler her zaman execution layer'dan geçer; ekran doğrudan araç çağırmaz.
- Araştırma modunda simüle edilen işlemler “Simulation · synthetic data” rozetini gösterir.
- `main` güncellenince: `git pull origin main`.
