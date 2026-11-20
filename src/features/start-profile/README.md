# Melike Şahin · Başlangıç, profil ve ana sayfa

Branch: `Melike-Sahin` · Klasör: `src/features/start-profile/` · Ekranlar: 01–10

Story metinleri ve kabul kriterleri: [Beemy User Stories](https://docs.google.com/document/d/1fudNVUfQvUdLdeaM4BntRtCpyhUhFH0DhF2yhvB9TTI/edit) (detaylı versiyon, bölüm 4). İlerleme: [Beemy Sprint Tracker](https://docs.google.com/spreadsheets/d/1AuI4b5pgHaM7udlu4D6gXL_6OZD1MRKYwqPxG9lWOa8/edit). Tasarım: [Figma](https://www.figma.com/design/ZYNjpU7NGvws9wkmFaVq9k/?node-id=2188-2324). Rota listesi: [`docs/screens.md`](../../../docs/screens.md).

Ekran dosyasının adı, Figma frame adı ve story başlığı aynıdır. PR başlığı: `feat(BM-xxx): <story başlığı>`.

## Ekranlarım

| No | Figma frame | Rota | Sprint | Dosya |
|---|---|---|---|---|
| 01 | 01 · BM-007 · Welcome · Melike | `/onboarding` | 1 | `screens/WelcomeScreen.tsx` |
| 02 | 02 · BM-008 · Language · Melike | `/onboarding/language` | 2 | `screens/LanguageScreen.tsx` |
| 03 | 03 · BM-014 · My tasks · Melike | `/home` | 3 | `screens/MyTasksScreen.tsx` |
| 04 | 04 · BM-031 · Notifications · Melike | `/home/notifications` | 6 | `screens/NotificationsScreen.tsx` |
| 05 | 05 · BM-015 · Profile · Melike | `/profile` | 3 | `screens/ProfileScreen.tsx` |
| 06 | 06 · BM-021 · Edit verified facts · Melike | `/profile/facts` | 4 | `screens/EditFactsScreen.tsx` |
| 07 | 07 · BM-024 · My documents · Melike | `/profile/documents` | 5 | `screens/DocumentsScreen.tsx` |
| 08 | 08 · BM-025 · Preferences · Melike | `/profile/preferences` | 5 | `screens/PreferencesScreen.tsx` |
| 09 | 09 · BM-030 · Settings · Melike | `/profile/settings` | 6 | `screens/SettingsScreen.tsx` |
| 10 | 10 · BM-048 · Evaluation summary · Melike | `/research/summary` | 8 | `screens/EvaluationSummaryScreen.tsx` |

## Diğer story'lerim

| ID | Story | Sprint | Dosyalar |
|---|---|---|---|
| BM-005 | Scenario schema and scoring rules | 1 | `eval/scenario.schema.json`, `eval/scoring.md` |
| BM-044 | Bilingual UI review and accessibility | 7 | `src/i18n/*` |
| BM-049 | Error, loading and empty states | 8 | `src/components/StateView.tsx` |
| BM-058 | Primary and secondary metrics per language | 10 | `eval/analysis/metrics.py` |
| BM-059 | Paired bootstrap confidence intervals | 10 | `eval/analysis/bootstrap.py` |

Ortak story'ler (ekipçe): BM-011 Cross-check expected results and translations, BM-020 Test plan and acceptance checks, BM-045 One end-to-end flow per domain, BM-046 Freeze scenario set v1.0 and split pilot inputs, BM-047 Pilot runs and fixes, BM-055 Run the 360 evaluation runs, BM-056 Bug fixing and stabilisation, BM-061 Demo build polish, BM-062 Re-runnable scenario pack and analysis scripts.

## Klasör yapısı

```
src/features/start-profile/
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
