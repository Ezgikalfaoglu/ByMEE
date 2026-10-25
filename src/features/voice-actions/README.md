# voice-actions

Owner: Berfin · Screens 17 to 24

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
| `screens/AssistantChatScreen.tsx` | BM-009 |
| `components/ChatBubble.tsx` | BM-009 |
| `lib/intents.ts` | BM-009, BM-037 |
| `data/chat.mock.ts` | BM-009 |
| `screens/VoiceAssistantScreen.tsx` | BM-015 |
| `components/SoundWave.tsx` | BM-015 |
| `data/voice.mock.ts` | BM-015 |
| `screens/ActionApprovalScreen.tsx` | BM-016 |
| `components/ShareList.tsx` | BM-016 |
| `components/GatePath.tsx` | BM-016 |
| `lib/approvals.ts` | BM-016 |
| `data/approval.mock.ts` | BM-016 |
| `components/EditLimitsSheet.tsx` | BM-021 |
| `lib/limitsValidation.ts` | BM-021 |
| `lib/limitsValidation.test.ts` | BM-021 |
| `lib/approvalGuard.ts` | BM-022 |
| `lib/approvalGuard.test.ts` | BM-022 |
| `lib/actionLog.ts` | BM-022 |
| `screens/CallSimulationScreen.tsx` | BM-025 |
| `components/TranscriptLine.tsx` | BM-025 |
| `data/callScripts.mock.ts` | BM-025 |
| `screens/ConversationAnalysisScreen.tsx` | BM-030 |
| `components/FactRow.tsx` | BM-030 |
| `lib/summarizeCall.ts` | BM-030 |
| `screens/NegotiationScreen.tsx` | BM-031 |
| `components/PriceCompare.tsx` | BM-031 |
| `data/offer.mock.ts` | BM-031 |
| `screens/CalendarScreen.tsx` | BM-035 |
| `components/SlotCard.tsx` | BM-035 |
| `lib/slots.ts` | BM-035 |
| `lib/slots.test.ts` | BM-035 |
| `data/calendar.mock.ts` | BM-035 |
| `screens/AppointmentConfirmationScreen.tsx` | BM-036 |
| `components/ManageBookingSheet.tsx` | BM-036 |
| `data/appointment.mock.ts` | BM-036 |
| `lib/routeIntent.ts` | BM-037 |
| `lib/routeIntent.test.ts` | BM-037 |
| `lib/speech.ts` | BM-046 |
| `lib/googleCalendar.ts` | BM-049 |
| `lib/realCall.ts` | BM-051 |

## Shared files you build (outside this folder, PR reviewed by Ezgi)

| File | Story |
|---|---|
| `src/types/models.ts` | BM-003 |
| `src/services/index.ts` | BM-003 |
| `src/services/mock/*.mock.ts` | BM-003 |
| `src/services/mockConfig.ts` | BM-003 |
| `src/utils/formatMoney.ts` | BM-003 |

## Rules

- Do not copy `src/theme/` or `src/components/` into this folder. Import them.
- Prices in ₺ with `formatMoney()`. Sample persona: Elif, Çankaya, Ankara.
- Every screen has loading, empty and error states.
- PR title: `feat(BM-xxx): short text`.
