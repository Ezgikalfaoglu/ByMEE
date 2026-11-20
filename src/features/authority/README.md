# Ayşe Berfin Özçelik · Yetki, onay ve kayıtlar

Branch: `Berfin-Ozcelik` · Klasör: `src/features/authority/` · Ekranlar: 21–30

Story metinleri ve kabul kriterleri: [Beemy User Stories](https://docs.google.com/document/d/1fudNVUfQvUdLdeaM4BntRtCpyhUhFH0DhF2yhvB9TTI/edit) (detaylı versiyon, bölüm 4). İlerleme: [Beemy Sprint Tracker](https://docs.google.com/spreadsheets/d/1AuI4b5pgHaM7udlu4D6gXL_6OZD1MRKYwqPxG9lWOa8/edit). Tasarım: [Figma](https://www.figma.com/design/ZYNjpU7NGvws9wkmFaVq9k/?node-id=2188-2324). Rota listesi: [`docs/screens.md`](../../../docs/screens.md).

Ekran dosyasının adı, Figma frame adı ve story başlığı aynıdır. PR başlığı: `feat(BM-xxx): <story başlığı>`.

## Ekranlarım

| No | Figma frame | Rota | Sprint | Dosya |
|---|---|---|---|---|
| 21 | 21 · BM-013 · Authority setup · Berfin | `/task/[id]/authority` | 2 | `screens/AuthorityScreen.tsx` |
| 22 | 22 · BM-018 · Approval before action · Berfin | `/task/[id]/approve` | 3 | `screens/ApprovalScreen.tsx` |
| 23 | 23 · BM-019 · Targeted question · Berfin | `/task/[id]/question` | 3 | `screens/QuestionScreen.tsx` |
| 24 | 24 · BM-037 · No valid option · Berfin | `/task/[id]/stopped` | 6 | `screens/NoValidOptionScreen.tsx` |
| 25 | 25 · BM-041 · New limit · Berfin | `/task/[id]/new-limit` | 7 | `screens/NewLimitScreen.tsx` |
| 26 | 26 · BM-042 · Result · Berfin | `/task/[id]/result` | 7 | `screens/ResultScreen.tsx` |
| 27 | 27 · BM-052 · Audit log · Berfin | `/log` | 8 | `screens/AuditLogScreen.tsx` |
| 28 | 28 · BM-053 · Log entry details · Berfin | `/log/[entryId]` | 8 | `screens/LogEntryScreen.tsx` |
| 29 | 29 · BM-057 · Active permissions · Berfin | `/profile/permissions` | 9 | `screens/ActivePermissionsScreen.tsx` |
| 30 | 30 · BM-054 · Run log · Berfin | `/research/run/[id]` | 8 | `screens/RunLogScreen.tsx` |

## Diğer story'lerim

| ID | Story | Sprint | Dosyalar |
|---|---|---|---|
| BM-003 | Shared data contracts and mock services ✓ | 1 | `src/services/mock/base.ts`, `src/services/mockConfig.ts`, `src/utils/formatMoney.ts` |
| BM-010 | Scenario drafts: shopping and returns, travel, daily appointments | 2 | `eval/scenarios/ALI-*.json, SEY-*.json, RAN-*.json` |
| BM-023 | Execution layer skeleton | 4 | `src/execution/executor.ts`, `src/execution/executor.test.ts` |
| BM-028 | Simulator core: reset, event triggers, records | 5 | `src/sim/simulator.ts`, `src/sim/records.ts` |
| BM-029 | Authority checks: action, recipient, data, time, amount | 5 | `src/execution/checks.ts`, `src/execution/checks.test.ts` |
| BM-035 | Re-check before binding action and transaction ID | 6 | `src/execution/recheck.ts`, `src/execution/idempotency.ts` |
| BM-036 | Condition A and B switch | 6 | `src/execution/policy.ts` |
| BM-043 | Edge case tests | 7 | `src/execution/edgeCases.test.ts` |

Ortak story'ler (ekipçe): BM-011 Cross-check expected results and translations, BM-020 Test plan and acceptance checks, BM-045 One end-to-end flow per domain, BM-046 Freeze scenario set v1.0 and split pilot inputs, BM-047 Pilot runs and fixes, BM-055 Run the 360 evaluation runs, BM-056 Bug fixing and stabilisation, BM-061 Demo build polish, BM-062 Re-runnable scenario pack and analysis scripts.

## Klasör yapısı

```
src/features/authority/
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
