# Beemy screens and routes

30 screens, 10 per developer. The Figma frame name, the screen story title and the route below always match. Figma: [Beemy — Görev Devri ekranları (v3)](https://www.figma.com/design/ZYNjpU7NGvws9wkmFaVq9k/?node-id=2188-2324).

| No | Figma frame | Owner | Route | Story | Sprint | Screen file |
|---|---|---|---|---|---|---|
| 01 | 01 · BM-007 · Welcome · Melike | Melike | `/onboarding` | BM-007 | 1 | `src/features/start-profile/screens/WelcomeScreen.tsx` |
| 02 | 02 · BM-008 · Language · Melike | Melike | `/onboarding/language` | BM-008 | 2 | `src/features/start-profile/screens/LanguageScreen.tsx` |
| 03 | 03 · BM-014 · My tasks · Melike | Melike | `/home` | BM-014 | 3 | `src/features/start-profile/screens/MyTasksScreen.tsx` |
| 04 | 04 · BM-031 · Notifications · Melike | Melike | `/home/notifications` | BM-031 | 6 | `src/features/start-profile/screens/NotificationsScreen.tsx` |
| 05 | 05 · BM-015 · Profile · Melike | Melike | `/profile` | BM-015 | 3 | `src/features/start-profile/screens/ProfileScreen.tsx` |
| 06 | 06 · BM-021 · Edit verified facts · Melike | Melike | `/profile/facts` | BM-021 | 4 | `src/features/start-profile/screens/EditFactsScreen.tsx` |
| 07 | 07 · BM-024 · My documents · Melike | Melike | `/profile/documents` | BM-024 | 5 | `src/features/start-profile/screens/DocumentsScreen.tsx` |
| 08 | 08 · BM-025 · Preferences · Melike | Melike | `/profile/preferences` | BM-025 | 5 | `src/features/start-profile/screens/PreferencesScreen.tsx` |
| 09 | 09 · BM-030 · Settings · Melike | Melike | `/profile/settings` | BM-030 | 6 | `src/features/start-profile/screens/SettingsScreen.tsx` |
| 10 | 10 · BM-048 · Evaluation summary · Melike | Melike | `/research/summary` | BM-048 | 8 | `src/features/start-profile/screens/EvaluationSummaryScreen.tsx` |
| 11 | 11 · BM-012 · New task · Eda | Eda | `/new` | BM-012 | 2 | `src/features/task-tools/screens/NewTaskScreen.tsx` |
| 12 | 12 · BM-016 · Task summary · Eda | Eda | `/task/[id]/summary` | BM-016 | 3 | `src/features/task-tools/screens/TaskSummaryScreen.tsx` |
| 13 | 13 · BM-017 · Edit task · Eda | Eda | `/task/[id]/edit` | BM-017 | 3 | `src/features/task-tools/screens/EditTaskScreen.tsx` |
| 14 | 14 · BM-027 · Plan and progress · Eda | Eda | `/task/[id]` | BM-027 | 5 | `src/features/task-tools/screens/PlanProgressScreen.tsx` |
| 15 | 15 · BM-033 · Options · Eda | Eda | `/task/[id]/options` | BM-033 | 6 | `src/features/task-tools/screens/OptionsScreen.tsx` |
| 16 | 16 · BM-034 · Option details · Eda | Eda | `/task/[id]/options/[optionId]` | BM-034 | 6 | `src/features/task-tools/screens/OptionDetailsScreen.tsx` |
| 17 | 17 · BM-039 · Document draft · Eda | Eda | `/task/[id]/document` | BM-039 | 7 | `src/features/task-tools/screens/DocumentDraftScreen.tsx` |
| 18 | 18 · BM-040 · Messages · Eda | Eda | `/task/[id]/messages` | BM-040 | 7 | `src/features/task-tools/screens/MessagesScreen.tsx` |
| 19 | 19 · BM-050 · Scenario library · Eda | Eda | `/research` | BM-050 | 8 | `src/features/task-tools/screens/ScenarioLibraryScreen.tsx` |
| 20 | 20 · BM-051 · Run setup · Eda | Eda | `/research/run/new` | BM-051 | 8 | `src/features/task-tools/screens/RunSetupScreen.tsx` |
| 21 | 21 · BM-013 · Authority setup · Berfin | Berfin | `/task/[id]/authority` | BM-013 | 2 | `src/features/authority/screens/AuthorityScreen.tsx` |
| 22 | 22 · BM-018 · Approval before action · Berfin | Berfin | `/task/[id]/approve` | BM-018 | 3 | `src/features/authority/screens/ApprovalScreen.tsx` |
| 23 | 23 · BM-019 · Targeted question · Berfin | Berfin | `/task/[id]/question` | BM-019 | 3 | `src/features/authority/screens/QuestionScreen.tsx` |
| 24 | 24 · BM-037 · No valid option · Berfin | Berfin | `/task/[id]/stopped` | BM-037 | 6 | `src/features/authority/screens/NoValidOptionScreen.tsx` |
| 25 | 25 · BM-041 · New limit · Berfin | Berfin | `/task/[id]/new-limit` | BM-041 | 7 | `src/features/authority/screens/NewLimitScreen.tsx` |
| 26 | 26 · BM-042 · Result · Berfin | Berfin | `/task/[id]/result` | BM-042 | 7 | `src/features/authority/screens/ResultScreen.tsx` |
| 27 | 27 · BM-052 · Audit log · Berfin | Berfin | `/log` | BM-052 | 8 | `src/features/authority/screens/AuditLogScreen.tsx` |
| 28 | 28 · BM-053 · Log entry details · Berfin | Berfin | `/log/[entryId]` | BM-053 | 8 | `src/features/authority/screens/LogEntryScreen.tsx` |
| 29 | 29 · BM-057 · Active permissions · Berfin | Berfin | `/profile/permissions` | BM-057 | 9 | `src/features/authority/screens/ActivePermissionsScreen.tsx` |
| 30 | 30 · BM-054 · Run log · Berfin | Berfin | `/research/run/[id]` | BM-054 | 8 | `src/features/authority/screens/RunLogScreen.tsx` |

## Tabs

| Tab | Opens |
|---|---|
| Görevler | 03 My tasks |
| Yeni | 11 New task |
| Kayıtlar | 27 Audit log |
| Profil | 05 Profile |

No tab bar on 01 Welcome, 02 Language and the research screens 10, 19, 20 and 30.
