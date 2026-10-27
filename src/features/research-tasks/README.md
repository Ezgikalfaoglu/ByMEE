# research-tasks

Owner: Eda · Screens 09 to 16

This is your feature folder. Work only here and in your own branch, then open a pull request to `main`.
The full stories are in the ByMEE User Stories doc (Backlog tab). Button texts and messages in “Must keep” are exact.

## Folders

| Folder | What goes here |
|---|---|
| `screens/` | One file per screen, name ends with `Screen.tsx` |
| `components/` | Parts used only in this feature |
| `data/` | Mock data and screen texts (`*.mock.ts`, `*.texts.ts`) |
| `lib/` | Logic without UI (rules, checks, scoring) and its `*.test.ts` |
| `types.ts` | Types used only in this feature |
| `index.ts` | Exports your screens, so the route files in `app/` can import them |

## Files to create

| File | Story |
|---|---|
| `screens/HomeDashboardScreen.tsx` | BM-007 |
| `lib/greeting.ts` | BM-007 |
| `data/home.mock.ts` | BM-007 |
| `screens/ResearchRequestScreen.tsx` | BM-008 |
| `lib/requestValidation.ts` | BM-008 |
| `data/research.mock.ts` | BM-008 |
| `lib/parseRequest.ts` | BM-013, BM-048 |
| `lib/parseRequest.test.ts` | BM-013 |
| `components/RequestSummarySheet.tsx` | BM-013 |
| `screens/ResearchProgressScreen.tsx` | BM-014 |
| `lib/researchRunner.ts` | BM-014 |
| `screens/ShortlistScreen.tsx` | BM-019 |
| `components/OptionCard.tsx` | BM-019 |
| `lib/sortOptions.ts` | BM-019 |
| `data/options.mock.ts` | BM-019 |
| `screens/TaskDashboardScreen.tsx` | BM-020 |
| `components/TaskCard.tsx` | BM-020 |
| `components/AddTaskSheet.tsx` | BM-020 |
| `lib/taskStatus.ts` | BM-020 |
| `data/tasks.mock.ts` | BM-020, BM-029 |
| `screens/DecisionMatrixScreen.tsx` | BM-024 |
| `components/MatrixTable.tsx` | BM-024 |
| `lib/scoring.ts` | BM-024 |
| `lib/scoring.test.ts` | BM-024 |
| `data/matrix.mock.ts` | BM-024 |
| `components/WeightSliders.tsx` | BM-028 |
| `lib/weights.ts` | BM-028 |
| `lib/weights.test.ts` | BM-028 |
| `screens/TaskDetailsScreen.tsx` | BM-029 |
| `screens/ComparisonScreen.tsx` | BM-034 |
| `components/CompareRow.tsx` | BM-034 |
| `lib/taskEvents.ts` | BM-040 |
| `lib/taskEvents.test.ts` | BM-040 |
| `lib/researchSource.ts` | BM-045 |
| `lib/aiParser.ts` | BM-048 |

## Shared files you build (outside this folder, PR reviewed by Ezgi)

| File | Story |
|---|---|
| `app/_layout.tsx` | BM-002 |
| `app/index.tsx` | BM-002 |
| `app/(tabs)/_layout.tsx` | BM-002 |
| `app/gate/_layout.tsx` | BM-002 |
| `one route file per screen` | BM-002 |
| `src/store/AppStateProvider.tsx` | BM-004 |
| `src/store/storage.ts` | BM-004 |
| `src/store/events.ts` | BM-004 |
| `src/store/seed.ts` | BM-004 |
| `src/components/thread/Thread.tsx, Knot.tsx, GateCard.tsx` | BM-007 |
| `.env.example` | BM-045 |

## Rules

- Do not copy `src/theme/` or `src/components/` into this folder. Import them.
- Prices in ₺ with `formatMoney()`. Sample persona: Elif, Çankaya, Ankara.
- Every screen has loading, empty and error states.
- PR title: `feat(BM-xxx): short text`.
