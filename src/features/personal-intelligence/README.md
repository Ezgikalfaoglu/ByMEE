# personal-intelligence

Owner: Melike · Screens 01 to 08

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
| `screens/WelcomeScreen.tsx` | BM-005 |
| `data/onboarding.texts.ts` | BM-005 |
| `screens/ProfileSetupScreen.tsx` | BM-006 |
| `components/FocusChips.tsx` | BM-006 |
| `lib/validation.ts` | BM-006 |
| `lib/validation.test.ts` | BM-006 |
| `data/profile.mock.ts` | BM-006 |
| `screens/PersonalProfileScreen.tsx` | BM-011 |
| `screens/EditProfileScreen.tsx` | BM-011 |
| `components/ProfileHeader.tsx` | BM-011 |
| `screens/PermissionsScreen.tsx` | BM-012 |
| `components/PermissionRow.tsx` | BM-012 |
| `lib/consent.ts` | BM-012 |
| `data/permissions.mock.ts` | BM-012 |
| `screens/ConnectedDataScreen.tsx` | BM-017 |
| `components/ConnectionRow.tsx` | BM-017 |
| `data/connections.mock.ts` | BM-017 |
| `screens/DigitalTwinScreen.tsx` | BM-018 |
| `components/PreferenceCard.tsx` | BM-018 |
| `lib/preferences.ts` | BM-018, BM-027 |
| `data/preferences.mock.ts` | BM-018 |
| `components/StatementUpload.tsx` | BM-023 |
| `lib/statements.ts` | BM-023 |
| `data/spending.mock.ts` | BM-023 |
| `screens/SpendingInsightsScreen.tsx` | BM-026 |
| `components/CategoryRow.tsx` | BM-026 |
| `lib/spending.ts` | BM-026 |
| `lib/spending.test.ts` | BM-026 |
| `components/PreferenceEditor.tsx` | BM-027 |
| `lib/recurring.ts` | BM-032 |
| `lib/recurring.test.ts` | BM-032 |
| `components/RecurringRow.tsx` | BM-032 |
| `screens/ProactiveAlertsScreen.tsx` | BM-033 |
| `components/AlertCard.tsx` | BM-033 |
| `lib/alertRules.ts` | BM-033 |
| `lib/alertRules.test.ts` | BM-033 |
| `data/alerts.mock.ts` | BM-033 |
| `components/AlertActions.tsx` | BM-038 |
| `lib/alerts.ts` | BM-038 |
| `screens/DeleteDataScreen.tsx` | BM-039 |
| `lib/deleteData.ts` | BM-039 |
| `lib/pdfParser.ts` | BM-044 |
| `lib/pdfParser.test.ts` | BM-044 |
| `lib/secureStore.ts` | BM-047 |
| `lib/learnFromChoices.ts` | BM-047 |
| `lib/learnFromChoices.test.ts` | BM-047 |

## Rules

- Do not copy `src/theme/` or `src/components/` into this folder. Import them.
- Prices in ₺ with `formatMoney()`. Sample persona: Elif, Çankaya, Ankara.
- Every screen has loading, empty and error states.
- PR title: `feat(BM-xxx): short text`.
