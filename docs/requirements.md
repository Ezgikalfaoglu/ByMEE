# ByMEE requirements

Owner: Ezgi (PM, BA, QA) · Story: BM-001 · Last update: 26 Oct 2026

The detailed stories are in the [ByMEE User Stories](https://docs.google.com/document/d/1YOpgs57Em4j-3gEsBUu_N7C90nZ8SG8m8ZYjfuopw6g/edit) doc. Progress is in the [ByMEE Sprint Tracker](https://docs.google.com/spreadsheets/d/1AuI4b5pgHaM7udlu4D6gXL_6OZD1MRKYwqPxG9lWOa8/edit). This file gives the big picture.

## 1. Vision

ByMEE is a personal assistant app. It does the research and planning for everyday tasks (for example, finding a Pilates studio near home within a budget), compares the options, calls or messages the provider, and books a time that fits the user's day. **Nothing happens without the user's OK.**

The design idea is **the Thread**: the user's day as one vertical line. Every event, every task ByMEE works on and every decision the user must make is a knot on that line. A decision point is a **gate**. Gates are the only place that uses the Blush colour.

## 2. Users

- Main persona: **Elif**, lives in Çankaya, Ankara. Busy, wants more free time, careful with money. Prices are in Turkish lira (₺).
- The app language is English.

## 3. Scope

### MVP (Sprints 1 to 8, demo on 12 Feb 2027)

| Area | Screens | Owner |
|---|---|---|
| Personal intelligence: onboarding, profile, connected data, permissions, spending, preferences (digital twin), alerts | 01 to 08 | Melike |
| Research and tasks: Home (today's Thread), research request, progress, shortlist, decision matrix, tasks, task details, comparison | 09 to 16 | Eda |
| Assistant and actions: chat, voice, gate flow (approve, call, summary, offer, pick a time, booked) | 17 to 24 | Berfin |
| Requirements, test plan, test cases, integration and usability tests, release | all | Ezgi |

In the MVP, data, calls and bookings are **simulated** with mock services. The end-to-end demo goes from profile setup to a booked class (BM-041).

### Period 2 (Sprints 9 to 11)

Real PDF statements, a real research data source, speech to text, secure storage, AI request understanding, Google Calendar, automated tests. A real phone call is a stretch goal (BM-051).

### Out of scope

Real payments, a real bank login, sign in and accounts on a server, other languages, tablets.

## 4. Rules for every feature

1. **Consent first.** A feature that uses personal data checks the user's permission before it reads the data.
2. **Gates.** Calls, emails, bookings, accepting an offer, sharing personal data and payments always need the user's approval first. One approval is for one action.
3. **Honest simulation.** Every simulated action and every sample dataset shows the label “Simulation” or “Sample data”.
4. **States.** Every screen has loading, empty and error states.
5. **Fixed texts.** Button texts and messages in the “Must keep” column are used exactly as written.

## 5. Non-functional requirements

- Runs on iOS and Android with Expo Go (Expo SDK 58).
- Body text at least 14 pt, captions at least 12 pt, touch targets at least 44 × 44, every icon button has a text label.
- No personal data in logs. API keys only in `.env`, never in the repo.
- Unit tests for logic in `lib/` folders.

## 6. Technology

React Native, Expo SDK 58, Expo Router, TypeScript, npm. Node 22.14.0. Shared theme in `src/theme/` and shared components in `src/components/`.

## 7. Plan

11 two-week sprints, from 26 Oct 2026 to 26 Mar 2027. Sprint 5 is a light sprint (New Year). MVP demo on 12 Feb 2027, code freeze on 24 Mar 2027.

## 8. Definition of Done

- Merged to `main` through a pull request reviewed by Ezgi.
- Every “Must keep” line tested by Ezgi.
- Unit tests for files in `lib/`.
- Works on iOS and Android.

## 9. Sign-off

Vision, scope and the MVP line are agreed by the whole team.

- [ ] Ezgi
- [ ] Melike
- [ ] Eda
- [ ] Berfin
