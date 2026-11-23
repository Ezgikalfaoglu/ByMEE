# Beemy requirements

Owner: Ezgi (PM) · Story: BM-001 · Last update: 23 Nov 2026 (v6)

The backlog and the detailed stories are in the [Beemy User Stories](https://docs.google.com/document/d/1Xb_IfONw5j9WiAaj7AdW68IzL1zRA8XK0xzPr3ZsLLw/edit) doc. Progress is in the [Beemy Sprint Tracker](https://docs.google.com/spreadsheets/d/1AuI4b5pgHaM7udlu4D6gXL_6OZD1MRKYwqPxG9lWOa8/edit). Screens are on the Figma page [Beemy · Ekranlar v6](https://www.figma.com/design/ZYNjpU7NGvws9wkmFaVq9k/?node-id=2222-1077). This file gives the big picture.

## 1. Vision

Beemy is a general-purpose personal AI assistant. The user describes a multi-step task in Turkish or English (for example “find a hybrid software internship in Ankara, adapt my CV to English and apply”). Beemy turns it into a task definition, plans the tool steps, prepares documents, talks to the other party and carries out the actions **only within the authority the user gave**.

The authority check is done by code in an execution layer, not by the language model. Beemy asks the user when required information is missing or new authority is needed, and stops with a reason when no valid option is left.

## 2. Research question (TÜBİTAK 2209-A)

The project is the prototype of the TÜBİTAK 2209-A proposal “Kişisel Yapay Zekâ Asistanlarında Görev Devri ve Yetki Denetimi”. It compares two conditions on the same prototype:

- **A · Approval before action:** the user approves every binding action.
- **B · Task delegation:** the authority given at the start is enough for binding actions within the limits.

30 scenarios in six domains (career, moving, messaging and calendar, shopping and returns, travel, daily appointments), each in Turkish and English, are run 3 times in both conditions: 360 runs. The primary target: in condition B, at least 15 of the 18 completable scenarios are completed correctly, in both languages and all three repetitions, with zero violations and zero extra user decisions.

## 3. Users

- Sample persona: **Elif Yılmaz**, Çankaya, Ankara (synthetic). Prices are in TL.
- The app is in English by default and fully supports Turkish (switch on screen 02 and in Settings). Voice works in both languages, also mixed. Documents and messages can use a different language from the app.

## 4. Scope

| Area | Screens | Owner |
|---|---|---|
| Account, home and personalisation: welcome, language, sign up, verify code, log in, forgot password, permissions and data sources, voice introduction, home, for you, profile, what I learned, decision twin, connected sources, rules, settings, evaluation summary | 01–17 | Melike |
| Voice, task flow, research and messages: voice assistant, type mode, my tasks, task summary, live plan, agents, recommendations, comparison table, travel plan, price tracking, offers, inbox summary, reply draft, message search, scenario library, run setup, A/B comparison | 18–34 | Eda |
| Authority, approval, completion, automation and records: authority setup, approval before action, payment approval, data sharing approval, voice question, emergency stop, plan changed, no valid option, new limit, task completed, activity log, log entry details, workflow discovery, teach by showing, learned workflows, permissions and approval rules, run log | 35–51 | Berfin |
| Project management: documents, repositories, main, PR reviews, final report | — | Ezgi |

All data, people, companies and actions are **synthetic**. Every simulated action is written to the simulator record and, in research mode, shown with the badge “Simulation · synthetic data” (Turkish: “Simülasyon · sentetik veri”).

Out of scope: real payments, real e-mail or phone calls, real personal accounts, human participants.

## 5. Rules for every feature

1. **Authority by code.** The language model only proposes actions. Every state-changing call goes through the execution layer and is checked for action type, recipient, data scope, current terms, time and amount.
2. **Separate actions.** Preparing a document and sending it are separate permissions. Payment, deposit, contract and data sharing are separate action types.
3. **Verified facts only.** Documents use only verified profile facts. Adding new experience or skills is an error.
4. **Honest results.** Success is shown only after the simulator record is verified.
5. **One question.** When required information is missing, Beemy asks one targeted question and does nothing until it is answered.
6. **States.** Every screen has loading, empty and error states.
7. **Fixed texts.** Quoted texts in the “Must have” lists are used exactly as written (English in en.json, the same key in tr.json).
8. **Mascot.** Main screens show the mascot in its original purple-blue colour; task and status screens show the mood colour.

## 6. Non-functional requirements

- Runs on iOS and Android with Expo Go (Expo SDK 58).
- Body text at least 14 pt, captions at least 12 pt, touch targets at least 44 × 44.
- No personal data in logs. API keys only in `.env`, never in the repo.
- Unit tests for logic files.

## 7. Technology

React Native, Expo SDK 58, Expo Router, TypeScript, npm, Node 22.14.0. Font: Plus Jakarta Sans. Shared theme in `src/theme/` (same tokens as the Figma variable collection “Beemy renkler”) and shared components in `src/components/`.

## 8. Plan

11 two-week sprints from 16 Nov 2026 to 16 Apr 2027, matching the TÜBİTAK work packages:

| Work package | What | Sprints |
|---|---|---|
| İP1 | Task definition, scenario schema, expected results | 1–2 |
| İP2 | Mobile screens | 1–4 (polish later) |
| İP3 | Planner, tools and simulator | 4–7 |
| İP4 | Authority checks and edge case tests | 4–7 |
| İP5 | Freeze scenario set and 360 runs | 8–9 |
| İP6 | Analysis | 10–11 |

Sprint 4 (28 Dec to 8 Jan) is a light sprint (New Year).

## 9. Definition of Done

- Merged to `main` through a pull request reviewed by Ezgi.
- Every “Must have” line checked. “Nice to have” lines are optional.
- Unit tests for logic files.
- Works on iOS and Android, both languages checked.
- The screen matches its Figma frame.

## 10. Sign-off

- [ ] Ezgi
- [ ] Melike
- [ ] Eda
- [ ] Berfin
