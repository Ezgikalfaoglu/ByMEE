# Türkan Eda Uluçay · Görevler, araçlar, iletişim, araştırma ve otomasyon

Branch: `Eda-Uluçay` · Klasör: `src/features/task-tools/` · Ekranlar: 20, 24–34, 47–51 (17 ekran)

Story metinleri ve kabul kriterleri: [Beemy User Stories](https://docs.google.com/document/d/1Xb_IfONw5j9WiAaj7AdW68IzL1zRA8XK0xzPr3ZsLLw/edit) (bölüm 5, her story'de **Must have** ve **Nice to have**). İlerleme: [Beemy Sprint Tracker](https://docs.google.com/spreadsheets/d/1AuI4b5pgHaM7udlu4D6gXL_6OZD1MRKYwqPxG9lWOa8/edit). Tasarım: [Figma · Beemy · Ekranlar v6](https://www.figma.com/design/ZYNjpU7NGvws9wkmFaVq9k/?node-id=2222-1077). Rota listesi: [`docs/screens.md`](../../../docs/screens.md).

Ekran dosyasının adı, Figma frame adı (`NN · BM-xxx · Ekran · Sahibi`) ve story başlığı aynıdır. PR başlığı: `feat(BM-xxx): <story başlığı>`.

Uygulama varsayılan olarak İngilizce, Türkçe tam destekli. Ekrandaki metinler `en.json` ve `tr.json` dosyalarından gelir; tırnak içindeki İngilizce metinler aynen kullanılır.

## Ekranlarım

| No | Figma frame | Rota | Sprint | Maskot | Dosya |
|---|---|---|---|---|---|
| 20 | 20 · BM-028 · My tasks · Eda | `/tasks` | 4 | Welcome, original colour | `task-tools/screens/MyTasksScreen.tsx` |
| 24 | 24 · BM-043 · Recommendations · Eda | `/task/[id]/options` | 6 | Comparing, mood colour | `task-tools/screens/RecommendationsScreen.tsx` |
| 25 | 25 · BM-044 · Comparison table · Eda | `/task/[id]/options/compare` | 6 | Comparing, mood colour | `task-tools/screens/ComparisonTableScreen.tsx` |
| 26 | 26 · BM-053 · Travel plan · Eda | `/task/[id]/travel` | 7 | Researching, mood colour | `task-tools/screens/TravelPlanScreen.tsx` |
| 29 | 29 · BM-054 · Inbox summary · Eda | `/inbox` | 7 | Researching, mood colour | `task-tools/screens/InboxSummaryScreen.tsx` |
| 30 | 30 · BM-055 · Reply draft · Eda | `/inbox/[messageId]/reply` | 7 | Thinking, mood colour | `task-tools/screens/ReplyDraftScreen.tsx` |
| 27 | 27 · BM-066 · Price tracking · Eda | `/watch` | 8 | Researching, mood colour | `task-tools/screens/PriceTrackingScreen.tsx` |
| 28 | 28 · BM-067 · Offers and negotiation · Eda | `/task/[id]/offers` | 8 | Comparing, mood colour | `task-tools/screens/OffersAndNegotiationScreen.tsx` |
| 32 | 32 · BM-068 · Scenario library · Eda | `/research` | 8 | Remembering, mood colour | `task-tools/screens/ScenarioLibraryScreen.tsx` |
| 33 | 33 · BM-069 · Run setup · Eda | `/research/run/new` | 8 | Thinking, mood colour | `task-tools/screens/RunSetupScreen.tsx` |
| 50 | 50 · BM-072 · Permissions and approval rules · Eda | `/profile/permissions` | 8 | Approved, original colour | `task-tools/screens/PermissionsAndApprovalRulesScreen.tsx` |
| 51 | 51 · BM-073 · Run log · Eda | `/research/run/[id]` | 8 | Comparing, mood colour | `task-tools/screens/RunLogScreen.tsx` |
| 31 | 31 · BM-076 · Message search · Eda | `/inbox/search` | 9 | Researching, mood colour | `task-tools/screens/MessageSearchScreen.tsx` |
| 34 | 34 · BM-077 · A/B comparison · Eda | `/research/compare` | 9 | Comparing, mood colour | `task-tools/screens/ABComparisonScreen.tsx` |
| 47 | 47 · BM-078 · Workflow discovery · Eda | `/workflows/discover` | 9 | Remembering, mood colour | `task-tools/screens/WorkflowDiscoveryScreen.tsx` |
| 48 | 48 · BM-079 · Teach by showing · Eda | `/workflows/teach` | 9 | Remembering, mood colour | `task-tools/screens/TeachByShowingScreen.tsx` |
| 49 | 49 · BM-080 · Learned workflows · Eda | `/workflows` | 9 | Remembering, mood colour | `task-tools/screens/LearnedWorkflowsScreen.tsx` |

> **23 Kasım 2026 sahiplik güncellemesi:** 18 Voice assistant, 19 Type mode, 21 Task summary, 22 Live plan, 23 Agents ve BM-015 Voice input Berfin'e geçti. Sana 47 Workflow discovery, 48 Teach by showing, 49 Learned workflows, 50 Permissions and approval rules, 51 Run log ve BM-046 Condition A and B switch geldi. Navigation shell (BM-006) sende kalıyor; rotalar değişmedi. Ekran numaraları, story ID'leri ve sprintler aynı.

## Ekran başına olmazsa olmazlar (özet)

Tam liste ve “Nice to have” fikirleri story dokümanında. Bu özet PR kontrolü içindir.

### 20 · BM-028 · My tasks

_As a user, I want to see my tasks by what needs me, so that I act on the right thing first._

- [ ] Header “2 need you, 3 running”, mascot in its original colour, “+” starts a new task (→ 18)
- [ ] Tabs Needs you / Running / Done with counts
- [ ] Needs you cards in amber with the action (Approve, Answer) and amount
- [ ] Running cards with a step bar (step x of y)
- [ ] Tab bar with Tasks active

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
| BM-004 | Task definition schema | 1 | `src/types/taskDefinition.ts`, `src/types/taskDefinition.test.ts` |
| BM-006 | Navigation shell, routes and EN/TR text files | 1 | `app/_layout.tsx`, `app/(tabs)/_layout.tsx`, `src/i18n/en.json`, `src/i18n/tr.json` |
| BM-011 | Scenario drafts: career, moving, messaging and calendar | 2 | `eval/scenarios/KAR-*.json`, `eval/scenarios/TAS-*.json`, `eval/scenarios/YAZ-*.json` |
| BM-027 | Request parser (EN and TR) with tests | 4 | `src/agent/parseRequest.ts`, `src/agent/parseRequest.test.ts` |
| BM-033 | Planner and shared tool interface | 5 | `src/agent/planner.ts`, `src/tools/types.ts` |
| BM-042 | Search, compare and document tools | 6 | `src/tools/search.ts`, `src/tools/compare.ts`, `src/tools/documents.ts` |
| BM-046 | Condition A and B switch | 6 | `src/execution/policy.ts` |
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
