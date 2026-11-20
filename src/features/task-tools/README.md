# Türkan Eda Uluçay · Görev, plan ve araçlar

Branch: `Eda-Uluçay` · Klasör: `src/features/task-tools/` · Ekranlar: 11–20

Story metinleri ve kabul kriterleri: [Beemy User Stories](https://docs.google.com/document/d/1fudNVUfQvUdLdeaM4BntRtCpyhUhFH0DhF2yhvB9TTI/edit) (detaylı versiyon, bölüm 4). İlerleme: [Beemy Sprint Tracker](https://docs.google.com/spreadsheets/d/1AuI4b5pgHaM7udlu4D6gXL_6OZD1MRKYwqPxG9lWOa8/edit). Tasarım: [Figma](https://www.figma.com/design/ZYNjpU7NGvws9wkmFaVq9k/?node-id=2188-2324). Rota listesi: [`docs/screens.md`](../../../docs/screens.md).

Ekran dosyasının adı, Figma frame adı ve story başlığı aynıdır. PR başlığı: `feat(BM-xxx): <story başlığı>`.

## Ekranlarım

| No | Figma frame | Rota | Sprint | Dosya |
|---|---|---|---|---|
| 11 | 11 · BM-012 · New task · Eda | `/new` | 2 | `screens/NewTaskScreen.tsx` |
| 12 | 12 · BM-016 · Task summary · Eda | `/task/[id]/summary` | 3 | `screens/TaskSummaryScreen.tsx` |
| 13 | 13 · BM-017 · Edit task · Eda | `/task/[id]/edit` | 3 | `screens/EditTaskScreen.tsx` |
| 14 | 14 · BM-027 · Plan and progress · Eda | `/task/[id]` | 5 | `screens/PlanProgressScreen.tsx` |
| 15 | 15 · BM-033 · Options · Eda | `/task/[id]/options` | 6 | `screens/OptionsScreen.tsx` |
| 16 | 16 · BM-034 · Option details · Eda | `/task/[id]/options/[optionId]` | 6 | `screens/OptionDetailsScreen.tsx` |
| 17 | 17 · BM-039 · Document draft · Eda | `/task/[id]/document` | 7 | `screens/DocumentDraftScreen.tsx` |
| 18 | 18 · BM-040 · Messages · Eda | `/task/[id]/messages` | 7 | `screens/MessagesScreen.tsx` |
| 19 | 19 · BM-050 · Scenario library · Eda | `/research` | 8 | `screens/ScenarioLibraryScreen.tsx` |
| 20 | 20 · BM-051 · Run setup · Eda | `/research/run/new` | 8 | `screens/RunSetupScreen.tsx` |

## Diğer story'lerim

| ID | Story | Sprint | Dosyalar |
|---|---|---|---|
| BM-004 | Task definition schema | 1 | `src/types/taskDefinition.ts`, `src/types/taskDefinition.test.ts` |
| BM-006 | Navigation shell, routes and TR/EN text files | 1 | `app/_layout.tsx`, `app/(tabs)/_layout.tsx`, `src/i18n/tr.json, en.json` |
| BM-009 | Scenario drafts: career, moving, messaging and calendar | 2 | `eval/scenarios/KAR-*.json, TAS-*.json, YAZ-*.json` |
| BM-022 | Request parser (TR and EN) with tests | 4 | `src/agent/parseRequest.ts`, `src/agent/parseRequest.test.ts` |
| BM-026 | Planner and shared tool interface | 5 | `src/agent/planner.ts`, `src/tools/types.ts` |
| BM-032 | Search, compare and document tools | 6 | `src/tools/search.ts`, `src/tools/compare.ts`, `src/tools/documents.ts` |
| BM-038 | Messaging, calendar and tracking tools | 7 | `src/tools/messaging.ts`, `src/tools/calendar.ts`, `src/tools/tracking.ts` |
| BM-060 | Stop and question scenario review, violations | 10 | `eval/analysis/review.md` |

Ortak story'ler (ekipçe): BM-011 Cross-check expected results and translations, BM-020 Test plan and acceptance checks, BM-045 One end-to-end flow per domain, BM-046 Freeze scenario set v1.0 and split pilot inputs, BM-047 Pilot runs and fixes, BM-055 Run the 360 evaluation runs, BM-056 Bug fixing and stabilisation, BM-061 Demo build polish, BM-062 Re-runnable scenario pack and analysis scripts.

## Klasör yapısı

```
src/features/task-tools/
  screens/      her ekran için bir dosya, adı Screen.tsx ile biter
  components/   yalnızca bu klasörde kullanılan parçalar
  data/         mock veri ve ekran metinleri (*.mock.ts, *.texts.ts)
  lib/          arayüzsüz mantık + *.test.ts
  types.ts      yalnızca bu klasörün tipleri
  index.ts      ekranları dışa aktarır (app/ rotaları buradan import eder)
  README.md     bu dosya
```

## Kurallar

- Sadece kendi klasöründe çalış. Ortak dosyalar (`app/_layout.tsx`, `src/theme/`, `src/components/`, `src/types/`, `src/services/`) Ezgi'nin onayladığı PR ile değişir.
- Metinler `tr.json` ve `en.json` dosyalarından gelir. “Must keep” satırlarındaki metinler aynen kullanılır.
- Simüle edilen her işlem “Simülasyon · sentetik veri” rozetini gösterir.
- `main` güncellenince: `git pull origin main`.
