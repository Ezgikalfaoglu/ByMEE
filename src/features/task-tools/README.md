# Türkan Eda Uluçay · Ses, görev yürütme, araştırma ve iletişim

Branch: `Eda-Uluçay` · Klasör: `src/features/task-tools/` · Ekranlar: 18–34 (17 ekran)

Story metinleri ve kabul kriterleri: [Beemy User Stories](https://docs.google.com/document/d/1Xb_IfONw5j9WiAaj7AdW68IzL1zRA8XK0xzPr3ZsLLw/edit) (bölüm 5, her story'de **Must have** ve **Nice to have**). İlerleme: [Beemy Sprint Tracker](https://docs.google.com/spreadsheets/d/1AuI4b5pgHaM7udlu4D6gXL_6OZD1MRKYwqPxG9lWOa8/edit). Tasarım: [Figma · Beemy · Ekranlar v6](https://www.figma.com/design/ZYNjpU7NGvws9wkmFaVq9k/?node-id=2222-1077). Rota listesi: [`docs/screens.md`](../../../docs/screens.md).

Ekran dosyasının adı, Figma frame adı (`NN · BM-xxx · Ekran · Sahibi`) ve story başlığı aynıdır. PR başlığı: `feat(BM-xxx): <story başlığı>`.

Uygulama varsayılan olarak İngilizce, Türkçe tam destekli. Ekrandaki metinler `en.json` ve `tr.json` dosyalarından gelir; tırnak içindeki İngilizce metinler aynen kullanılır.

## Ekranlarım

| No | Figma frame | Rota | Sprint | Maskot | Dosya |
|---|---|---|---|---|---|
| 18 | 18 · BM-016 · Voice assistant · Eda | `/voice` | 3 | Listening, mood colour | `screens/VoiceAssistantScreen.tsx` |
| 21 | 21 · BM-020 · Task summary · Eda | `/task/[id]/summary` | 3 | Thinking, mood colour | `screens/TaskSummaryScreen.tsx` |
| 19 | 19 · BM-024 · Type mode · Eda | `/chat/[chatId]` | 4 | Thinking, mood colour | `screens/TypeModeScreen.tsx` |
| 20 | 20 · BM-028 · My tasks · Eda | `/tasks` | 4 | Welcome, original colour | `screens/MyTasksScreen.tsx` |
| 22 | 22 · BM-034 · Live plan · Eda | `/task/[id]` | 5 | Researching, mood colour | `screens/LivePlanScreen.tsx` |
| 23 | 23 · BM-035 · Agents · Eda | `/agents` | 5 | Researching, mood colour | `screens/AgentsScreen.tsx` |
| 24 | 24 · BM-043 · Recommendations · Eda | `/task/[id]/options` | 6 | Comparing, mood colour | `screens/RecommendationsScreen.tsx` |
| 25 | 25 · BM-044 · Comparison table · Eda | `/task/[id]/options/compare` | 6 | Comparing, mood colour | `screens/ComparisonTableScreen.tsx` |
| 26 | 26 · BM-053 · Travel plan · Eda | `/task/[id]/travel` | 7 | Researching, mood colour | `screens/TravelPlanScreen.tsx` |
| 29 | 29 · BM-054 · Inbox summary · Eda | `/inbox` | 7 | Researching, mood colour | `screens/InboxSummaryScreen.tsx` |
| 30 | 30 · BM-055 · Reply draft · Eda | `/inbox/[messageId]/reply` | 7 | Thinking, mood colour | `screens/ReplyDraftScreen.tsx` |
| 27 | 27 · BM-066 · Price tracking · Eda | `/watch` | 8 | Researching, mood colour | `screens/PriceTrackingScreen.tsx` |
| 28 | 28 · BM-067 · Offers and negotiation · Eda | `/task/[id]/offers` | 8 | Comparing, mood colour | `screens/OffersAndNegotiationScreen.tsx` |
| 32 | 32 · BM-068 · Scenario library · Eda | `/research` | 8 | Remembering, mood colour | `screens/ScenarioLibraryScreen.tsx` |
| 33 | 33 · BM-069 · Run setup · Eda | `/research/run/new` | 8 | Thinking, mood colour | `screens/RunSetupScreen.tsx` |
| 31 | 31 · BM-076 · Message search · Eda | `/inbox/search` | 9 | Researching, mood colour | `screens/MessageSearchScreen.tsx` |
| 34 | 34 · BM-077 · A/B comparison · Eda | `/research/compare` | 9 | Comparing, mood colour | `screens/ABComparisonScreen.tsx` |

> **Navigasyon (BM-006) hazır iskelet:** `app/` altında 51 rotanın hepsi `ComingSoon` ile duruyor. Sekmeler Home, Tasks, Log, Profile. Ses bir sekme değil: Home'daki mikrofon ve My tasks'taki “+” 18 Voice assistant'ı açar. Kalan iş: `src/i18n/en.json` ve `tr.json`, çalışma anında dil değiştirme ve ilk açılış kontrolü.

## Ekran başına olmazsa olmazlar (özet)

Tam liste ve “Nice to have” fikirleri story dokümanında. Bu özet PR kontrolü içindir.

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

### 19 · BM-024 · Type mode

_As a user, I want to type instead of talk, so that I can use Beemy in quiet places._

- [ ] User bubbles on the right (indigo), Beemy bubbles on the left (white)
- [ ] Quick-reply chips under a Beemy question
- [ ] Inline result card with a “Book” button that goes through approval rules
- [ ] Input “Message Beemy…”, attach and send buttons; mic icon → 18
- [ ] Mascot in Thinking mood colour in the header

### 20 · BM-028 · My tasks

_As a user, I want to see my tasks by what needs me, so that I act on the right thing first._

- [ ] Header “2 need you, 3 running”, mascot in its original colour, “+” starts a new task (→ 18)
- [ ] Tabs Needs you / Running / Done with counts
- [ ] Needs you cards in amber with the action (Approve, Answer) and amount
- [ ] Running cards with a step bar (step x of y)
- [ ] Tab bar with Tasks active

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

### 24 · BM-043 · Recommendations

_As a user, I want the best options with reasons, so that I can decide fast._

- [ ] Title “3 hotels fit”, mascot in Comparing mood colour
- [ ] Best match card with % match, name, key facts, reason chips and price
- [ ] “Choose” starts the approval rules (36 or 37)
- [ ] Other options with match % and price; over budget shown in red
- [ ] “Compare all” → 25

### 25 · BM-044 · Comparison table

_As a user, I want a side-by-side table, so that I can compare options on the same points._

- [ ] Columns per option, rows Price, Sea view, Rating, Free cancel, To beach, Match
- [ ] Best column highlighted in lavender
- [ ] “No” and over-budget values in red
- [ ] Summary note (e.g. “Kervan wins on 4 of 6.”)
- [ ] “Choose Lara Kervan” → approval rules

### 26 · BM-053 · Travel plan

_As a user, I want my trip as a clear day plan, so that I know what happens when._

- [ ] Title with place and nights, dates and people
- [ ] Day tabs (Fri 12 … Mon 15)
- [ ] Timeline with time, what, details; booked items marked done
- [ ] Cards Total and Under budget by
- [ ] Buttons “Share” and “Add to calendar” (calendar tool)

### 29 · BM-054 · Inbox summary

_As a user, I want my inbox summarised, so that I only read what needs me._

- [ ] Title “3 emails need a reply” and “I read 42 new emails. 39 can wait.”
- [ ] Cards by urgency: Urgent (pink), Reply (amber), Reply (white) with sender, subject, one-line summary
- [ ] Tap a card → Reply draft (30)
- [ ] “Draft all 3 replies”
- [ ] Email is read only; nothing is sent from here

### 30 · BM-055 · Reply draft

_As a user, I want Beemy to draft a reply I can approve, so that answering takes seconds._

- [ ] Short view of their email
- [ ] Draft card with a violet border, editable text
- [ ] Tone chips Formal / Friendly / Shorter re-write the draft
- [ ] Attached file shown as a pill
- [ ] Mic to edit by voice; “Approve and send” goes through approval rules

### 27 · BM-066 · Price tracking

_As a user, I want Beemy to watch prices for me, so that I buy at the right time._

- [ ] Title “Watching 4 prices”, mascot in Researching mood colour
- [ ] Top item: price, change pill, 30-day bars and advice (“Lowest in 30 days.”)
- [ ] “Book it” goes through approval rules; “Keep watching”
- [ ] List of other items with price and weekly change (green down, red up)
- [ ] Alerts follow the rules in 15

### 28 · BM-067 · Offers and negotiation

_As a user, I want Beemy to negotiate within my limit, so that I get a better price without stress._

- [ ] Title “Talking to 2 sellers” and the item with my limit
- [ ] Offer history per seller (asked, offered, came back with)
- [ ] Best offer card in mint
- [ ] Note “I won't go above ₺4.000 without asking you.”
- [ ] “Accept ₺3.950” (approval rules) and “Stop”

### 32 · BM-068 · Scenario library

_As a researcher, I want all scenarios in a library, so that I can pick what to run._

- [ ] Title “Scenario library” and the count
- [ ] Filter chips All, Travel, Shopping, Email, Risky
- [ ] Rows with name, domain, steps and difficulty pill (Easy, Medium, Risky)
- [ ] “New run” → 33

### 33 · BM-069 · Run setup

_As a researcher, I want to set up a run, so that I can test a version and condition._

- [ ] Scenario field with “Change”
- [ ] Agent version A / B and approval mode Always ask / Smart / Simulated user
- [ ] Repetitions slider
- [ ] Switches Use simulator data and Record every step
- [ ] “Start run” → 51

### 31 · BM-076 · Message search

_As a user, I want to ask a question about my emails, so that I get the answer, not a list._

- [ ] Search field with voice input
- [ ] Filter chips (Last 30 days, Gmail, With files)
- [ ] Answer card in indigo with source and “Add to calendar”
- [ ] List of matching emails with date
- [ ] Read only

### 34 · BM-077 · A/B comparison

_As a researcher, I want to compare two versions, so that I know which is better._

- [ ] Verdict title (e.g. “B is better”) with the main difference
- [ ] A and B success cards (B in indigo)
- [ ] Table Approvals asked, Wrong actions, Avg. time, Unsafe blocked
- [ ] Significance note
- [ ] “Run again” and “Use B”

## Diğer story'lerim

| ID | Story | Sprint | Dosyalar |
|---|---|---|---|
| BM-004 | Task definition schema | 1 | `src/types/taskDefinition.ts`, `src/types/taskDefinition.test.ts` |
| BM-006 | Navigation shell, routes and EN/TR text files | 1 | `app/_layout.tsx`, `app/(tabs)/_layout.tsx`, `src/i18n/en.json`, `src/i18n/tr.json` |
| BM-011 | Scenario drafts: career, moving, messaging and calendar | 2 | `eval/scenarios/KAR-*.json`, `eval/scenarios/TAS-*.json`, `eval/scenarios/YAZ-*.json` |
| BM-015 | Voice input and spoken replies | 2 | `src/voice/useSpeech.ts`, `src/voice/speak.ts` |
| BM-027 | Request parser (EN and TR) with tests | 4 | `src/agent/parseRequest.ts`, `src/agent/parseRequest.test.ts` |
| BM-033 | Planner and shared tool interface | 5 | `src/agent/planner.ts`, `src/tools/types.ts` |
| BM-042 | Search, compare and document tools | 6 | `src/tools/search.ts`, `src/tools/compare.ts`, `src/tools/documents.ts` |
| BM-052 | Messaging, calendar and tracking tools | 7 | `src/tools/messaging.ts`, `src/tools/calendar.ts`, `src/tools/tracking.ts` |
| BM-083 | Stop and question scenario review, violations | 10 | `eval/analysis/review.md` |

Ortak story'ler (ekipçe): BM-014 Cross-check expected results and translations, BM-023 Test plan and acceptance checks, BM-061 One end-to-end flow per domain, BM-062 Freeze scenario set v1.0 and split pilot inputs, BM-063 Pilot runs and fixes, BM-074 Run the 360 evaluation runs, BM-075 Bug fixing and stabilisation, BM-084 Demo build polish, BM-085 Re-runnable scenario pack and analysis scripts.

## Maskot kuralı

- Ana ekranlarda (onboarding, hesap, Home, Tasks, Log, Profile) maskot **orijinal mor-mavi** renginde: `<Mascot mood="…" tinted={false} />`.
- Görev ve durum ekranlarında maskot **duygu renginde**: `tinted={true}` (Listening turkuaz, Waiting for approval turuncu, Asking sarı, Done yeşil, No result gri).
- Hangi ekranda hangi duygu olduğu yukarıdaki tabloda yazıyor.

## Klasör yapısı

```
src/features/task-tools/
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
