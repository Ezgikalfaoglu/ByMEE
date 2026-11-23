# Beemy screens and routes

51 screens: Melike 01–17, Eda 18–34, Berfin 35–51. The Figma frame name, the story title and the route below always match. Figma: [Beemy · Ekranlar v6](https://www.figma.com/design/ZYNjpU7NGvws9wkmFaVq9k/?node-id=2222-1077).

| No | Figma frame | Owner | Route | Story | Sprint | Mascot | Screen file |
|---|---|---|---|---|---|---|---|
| 01 | 01 · BM-007 · Welcome · Melike | Melike | `/onboarding` | BM-007 | 1 | Welcome, original colour | `src/features/start-profile/screens/WelcomeScreen.tsx` |
| 02 | 02 · BM-008 · Language · Melike | Melike | `/onboarding/language` | BM-008 | 2 | Welcome, original colour | `src/features/start-profile/screens/LanguageScreen.tsx` |
| 03 | 03 · BM-009 · Sign up · Melike | Melike | `/auth/sign-up` | BM-009 | 2 | Welcome, original colour | `src/features/start-profile/screens/SignUpScreen.tsx` |
| 04 | 04 · BM-017 · Verify code · Melike | Melike | `/auth/verify` | BM-017 | 3 | Asking, original colour | `src/features/start-profile/screens/VerifyCodeScreen.tsx` |
| 05 | 05 · BM-018 · Log in · Melike | Melike | `/auth/log-in` | BM-018 | 3 | Welcome, original colour | `src/features/start-profile/screens/LogInScreen.tsx` |
| 06 | 06 · BM-019 · Forgot password · Melike | Melike | `/auth/forgot-password` | BM-019 | 3 | Thinking, original colour | `src/features/start-profile/screens/ForgotPasswordScreen.tsx` |
| 07 | 07 · BM-025 · Permissions and data sources · Melike | Melike | `/onboarding/permissions` | BM-025 | 4 | Welcome, original colour | `src/features/start-profile/screens/PermissionsAndDataSourcesScreen.tsx` |
| 08 | 08 · BM-026 · Voice introduction · Melike | Melike | `/onboarding/about-you` | BM-026 | 4 | Listening, original colour | `src/features/start-profile/screens/VoiceIntroductionScreen.tsx` |
| 09 | 09 · BM-031 · Home · Melike | Melike | `/home` | BM-031 | 5 | Welcome, original colour | `src/features/start-profile/screens/HomeScreen.tsx` |
| 10 | 10 · BM-049 · For you · Melike | Melike | `/home/for-you` | BM-049 | 7 | Researching, original colour | `src/features/start-profile/screens/ForYouScreen.tsx` |
| 11 | 11 · BM-032 · Profile · Melike | Melike | `/profile` | BM-032 | 5 | Welcome, original colour | `src/features/start-profile/screens/ProfileScreen.tsx` |
| 12 | 12 · BM-039 · What I learned · Melike | Melike | `/profile/learned` | BM-039 | 6 | Remembering, original colour | `src/features/start-profile/screens/WhatILearnedScreen.tsx` |
| 13 | 13 · BM-051 · Decision twin · Melike | Melike | `/profile/decision-twin` | BM-051 | 7 | Comparing, original colour | `src/features/start-profile/screens/DecisionTwinScreen.tsx` |
| 14 | 14 · BM-040 · Connected sources · Melike | Melike | `/profile/sources` | BM-040 | 6 | Researching, original colour | `src/features/start-profile/screens/ConnectedSourcesScreen.tsx` |
| 15 | 15 · BM-050 · Notification and automation rules · Melike | Melike | `/profile/rules` | BM-050 | 7 | Thinking, original colour | `src/features/start-profile/screens/NotificationAndAutomationRulesScreen.tsx` |
| 16 | 16 · BM-041 · Settings and account · Melike | Melike | `/profile/settings` | BM-041 | 6 | Welcome, original colour | `src/features/start-profile/screens/SettingsAndAccountScreen.tsx` |
| 17 | 17 · BM-064 · Evaluation summary · Melike | Melike | `/research/summary` | BM-064 | 8 | Comparing, mood colour | `src/features/start-profile/screens/EvaluationSummaryScreen.tsx` |
| 18 | 18 · BM-016 · Voice assistant · Eda | Eda | `/voice` | BM-016 | 3 | Listening, mood colour | `src/features/task-tools/screens/VoiceAssistantScreen.tsx` |
| 19 | 19 · BM-024 · Type mode · Eda | Eda | `/chat/[chatId]` | BM-024 | 4 | Thinking, mood colour | `src/features/task-tools/screens/TypeModeScreen.tsx` |
| 20 | 20 · BM-028 · My tasks · Eda | Eda | `/tasks` | BM-028 | 4 | Welcome, original colour | `src/features/task-tools/screens/MyTasksScreen.tsx` |
| 21 | 21 · BM-020 · Task summary · Eda | Eda | `/task/[id]/summary` | BM-020 | 3 | Thinking, mood colour | `src/features/task-tools/screens/TaskSummaryScreen.tsx` |
| 22 | 22 · BM-034 · Live plan · Eda | Eda | `/task/[id]` | BM-034 | 5 | Researching, mood colour | `src/features/task-tools/screens/LivePlanScreen.tsx` |
| 23 | 23 · BM-035 · Agents · Eda | Eda | `/agents` | BM-035 | 5 | Researching, mood colour | `src/features/task-tools/screens/AgentsScreen.tsx` |
| 24 | 24 · BM-043 · Recommendations · Eda | Eda | `/task/[id]/options` | BM-043 | 6 | Comparing, mood colour | `src/features/task-tools/screens/RecommendationsScreen.tsx` |
| 25 | 25 · BM-044 · Comparison table · Eda | Eda | `/task/[id]/options/compare` | BM-044 | 6 | Comparing, mood colour | `src/features/task-tools/screens/ComparisonTableScreen.tsx` |
| 26 | 26 · BM-053 · Travel plan · Eda | Eda | `/task/[id]/travel` | BM-053 | 7 | Researching, mood colour | `src/features/task-tools/screens/TravelPlanScreen.tsx` |
| 27 | 27 · BM-066 · Price tracking · Eda | Eda | `/watch` | BM-066 | 8 | Researching, mood colour | `src/features/task-tools/screens/PriceTrackingScreen.tsx` |
| 28 | 28 · BM-067 · Offers and negotiation · Eda | Eda | `/task/[id]/offers` | BM-067 | 8 | Comparing, mood colour | `src/features/task-tools/screens/OffersAndNegotiationScreen.tsx` |
| 29 | 29 · BM-054 · Inbox summary · Eda | Eda | `/inbox` | BM-054 | 7 | Researching, mood colour | `src/features/task-tools/screens/InboxSummaryScreen.tsx` |
| 30 | 30 · BM-055 · Reply draft · Eda | Eda | `/inbox/[messageId]/reply` | BM-055 | 7 | Thinking, mood colour | `src/features/task-tools/screens/ReplyDraftScreen.tsx` |
| 31 | 31 · BM-076 · Message search · Eda | Eda | `/inbox/search` | BM-076 | 9 | Researching, mood colour | `src/features/task-tools/screens/MessageSearchScreen.tsx` |
| 32 | 32 · BM-068 · Scenario library · Eda | Eda | `/research` | BM-068 | 8 | Remembering, mood colour | `src/features/task-tools/screens/ScenarioLibraryScreen.tsx` |
| 33 | 33 · BM-069 · Run setup · Eda | Eda | `/research/run/new` | BM-069 | 8 | Thinking, mood colour | `src/features/task-tools/screens/RunSetupScreen.tsx` |
| 34 | 34 · BM-077 · A/B comparison · Eda | Eda | `/research/compare` | BM-077 | 9 | Comparing, mood colour | `src/features/task-tools/screens/ABComparisonScreen.tsx` |
| 35 | 35 · BM-013 · Authority setup · Berfin | Berfin | `/task/[id]/authority` | BM-013 | 2 | Thinking, mood colour | `src/features/authority/screens/AuthorityScreen.tsx` |
| 36 | 36 · BM-021 · Approval before action · Berfin | Berfin | `/task/[id]/approve` | BM-021 | 3 | Waiting for approval, mood colour | `src/features/authority/screens/ApprovalBeforeActionScreen.tsx` |
| 37 | 37 · BM-030 · Payment approval · Berfin | Berfin | `/task/[id]/approve-payment` | BM-030 | 4 | Waiting for approval, mood colour | `src/features/authority/screens/PaymentApprovalScreen.tsx` |
| 38 | 38 · BM-038 · Data sharing approval · Berfin | Berfin | `/task/[id]/approve-data` | BM-038 | 5 | Asking, mood colour | `src/features/authority/screens/DataSharingApprovalScreen.tsx` |
| 39 | 39 · BM-022 · Voice question · Berfin | Berfin | `/task/[id]/question` | BM-022 | 3 | Asking, mood colour | `src/features/authority/screens/VoiceQuestionScreen.tsx` |
| 40 | 40 · BM-047 · Emergency stop · Berfin | Berfin | `/task/[id]/stop` | BM-047 | 6 | No mascot | `src/features/authority/screens/EmergencyStopScreen.tsx` |
| 41 | 41 · BM-056 · Plan changed · Berfin | Berfin | `/task/[id]/replan` | BM-056 | 7 | Thinking, mood colour | `src/features/authority/screens/PlanChangedScreen.tsx` |
| 42 | 42 · BM-048 · No valid option · Berfin | Berfin | `/task/[id]/stopped` | BM-048 | 6 | No result, mood colour | `src/features/authority/screens/NoValidOptionScreen.tsx` |
| 43 | 43 · BM-057 · New limit · Berfin | Berfin | `/task/[id]/new-limit` | BM-057 | 7 | Waiting for approval, mood colour | `src/features/authority/screens/NewLimitScreen.tsx` |
| 44 | 44 · BM-058 · Task completed · Berfin | Berfin | `/task/[id]/result` | BM-058 | 7 | Done, mood colour | `src/features/authority/screens/TaskCompletedScreen.tsx` |
| 45 | 45 · BM-070 · Activity log · Berfin | Berfin | `/log` | BM-070 | 8 | Remembering, original colour | `src/features/authority/screens/ActivityLogScreen.tsx` |
| 46 | 46 · BM-071 · Log entry details · Berfin | Berfin | `/log/[entryId]` | BM-071 | 8 | Approved, mood colour | `src/features/authority/screens/LogEntryDetailsScreen.tsx` |
| 47 | 47 · BM-078 · Workflow discovery · Berfin | Berfin | `/workflows/discover` | BM-078 | 9 | Remembering, mood colour | `src/features/authority/screens/WorkflowDiscoveryScreen.tsx` |
| 48 | 48 · BM-079 · Teach by showing · Berfin | Berfin | `/workflows/teach` | BM-079 | 9 | Remembering, mood colour | `src/features/authority/screens/TeachByShowingScreen.tsx` |
| 49 | 49 · BM-080 · Learned workflows · Berfin | Berfin | `/workflows` | BM-080 | 9 | Remembering, mood colour | `src/features/authority/screens/LearnedWorkflowsScreen.tsx` |
| 50 | 50 · BM-072 · Permissions and approval rules · Berfin | Berfin | `/profile/permissions` | BM-072 | 8 | Approved, original colour | `src/features/authority/screens/PermissionsAndApprovalRulesScreen.tsx` |
| 51 | 51 · BM-073 · Run log · Berfin | Berfin | `/research/run/[id]` | BM-073 | 8 | Comparing, mood colour | `src/features/authority/screens/RunLogScreen.tsx` |

## Tabs

| Tab | Opens |
|---|---|
| Home | 09 Home |
| Tasks | 20 My tasks |
| Log | 45 Activity log |
| Profile | 11 Profile |

There is no centre tab for voice: Home has the big mic on the indigo panel (→ 18), and 20 has the “+” button (→ 18).

No tab bar on onboarding and account screens (01–08), voice and approval screens (18, 36–40) and the research screens (17, 32–34, 51).
