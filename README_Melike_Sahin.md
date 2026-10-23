# Developer 1 — Melike Şahin
## Personal Intelligence, Profile & Digital Twin — UI Phase

**Project:** Agentic Personal AI Assistant  
**Owner:** Melike Şahin  
**Phase:** Semester 1 — UI/UX implementation with mock data  
**Stack:** React Native + Expo + TypeScript  
**Your branch:** `feature/melike-profile-ui`

> **Your mission:** Build the screens where users create a profile, grant or revoke data access, inspect what the assistant has learned, and control personalized recommendations. This semester, use sample data only. Do not connect real banks, mailboxes, social networks, or AI services.

## 1. What you own — eight screens

| ID | Screen | What to show | Acceptance check |
|---|---|---|---|
| M01 | Welcome & onboarding | 3 slides explaining what the assistant can do, privacy and consent, a Continue button | Continue advances and opens profile setup |
| M02 | Profile setup | Name, preferred language, city, household/commute preferences; Save | Validation for required fields; data persists during app session |
| M03 | Personal profile | Profile summary, edit actions, known preferences, unknown fields | Edit navigates to the correct screen |
| M04 | Connected sources | Email, bank statement PDF, social accounts, calendar as separate cards | Each has clear Not connected / Demo connected status |
| M05 | Consent & permissions | Per-source toggles, purpose of use, revoke access, delete imported data (demo) | Turning a permission off updates UI immediately; no pre-checked sensitive consent |
| M06 | Statement import & spending | Choose a **sample** PDF or demo statement; show merchant, category, total, recurring charges | Clearly label sample data; no real bank credentials |
| M07 | Digital twin & preferences | Inferred priorities (price, commute, building age etc.), confidence labels and editable weights | User can correct an inference and see weights change |
| M08 | Insights & proactive alerts | Sample unused subscription, expiring mobile plan, preference-based suggestions | Alerts link to supporting sample evidence and have dismiss action |

**Important:** Inferences are suggestions, not facts. A PDF statement cannot prove a subscription is unused; label it “possible unused subscription — please verify.” The app must not infer sensitive personal traits without a clear need and consent.

## 2. Exactly what to deliver

- Eight navigable screens with consistent design and realistic **mock** content.
- Empty, loading, error and success states for important flows.
- Reusable UI components for profile cards, consent rows, source status, insight cards.
- TypeScript types and sample data in your own feature folder.
- A short screen-recording or screenshots of the complete flow.
- A Pull Request with a checklist and test evidence.

### Suggested folder ownership

```text
src/
  features/
    personal-intelligence/
      screens/
        OnboardingScreen.tsx
        ProfileSetupScreen.tsx
        ProfileScreen.tsx
        ConnectedSourcesScreen.tsx
        PermissionsScreen.tsx
        StatementInsightsScreen.tsx
        DigitalTwinScreen.tsx
        ProactiveInsightsScreen.tsx
      components/
      data/mockProfile.ts
      types.ts
      README.md
```

Do not change Eda's or Berfin's feature folders. The PM owns the app entry point, global navigation and shared theme. Ask the PM to register your screens; do not edit shared navigation without approval.

## 3. Install tools — first time only

1. Install **Node.js LTS** from https://nodejs.org/ and **Git** from https://git-scm.com/downloads.
2. Install **Visual Studio Code** from https://code.visualstudio.com/.
3. Install **Expo Go** on your phone, or use an Android emulator.
4. Open a terminal in VS Code (`Terminal > New Terminal`).
5. Check installation:

```bash
node -v
npm -v
git --version
```

If PowerShell blocks `npm.ps1`, open the **Command Prompt** terminal in VS Code and run the same commands there. Do not weaken system security settings just to run npm.

## 4. Get the project from GitHub

The PM will send you the repository URL. Replace `<REPOSITORY_URL>` with that exact URL:

```bash
git clone <REPOSITORY_URL>
cd <PROJECT_FOLDER>
npm install
npx expo start
```

Open Expo Go and scan the QR code (phone and computer usually need the same network). If the project does not start, send the full terminal error to the PM.

**Do not create a second Expo project:** work inside the repository prepared by the PM.

## 5. Create your own branch — every feature starts here

```bash
git switch main
git pull origin main
git switch -c feature/melike-profile-ui
```

- `main` is the shared, reviewed version.
- Your branch isolates your work.
- Check which branch you are on with `git branch --show-current`.
- If your branch already exists locally, use `git switch feature/melike-profile-ui` instead of `-c`.

## 6. Implement screens safely

1. Read the project's root README and shared design guidelines.
2. Create only the files in your assigned feature folder.
3. Build M01–M03 first; show them to the PM before continuing.
4. Build M04–M06; permissions must visibly control demo data access.
5. Build M07–M08; include edit/correct/dismiss interactions.
6. Use mock objects and local state; do not request real login credentials or upload real statements.
7. Test each screen on a phone-size viewport and check long text, empty states and button behavior.

**Example mock object** (adjust to the project's agreed types):

```ts
export const mockUser = {
  displayName: 'Demo User',
  preferredLanguage: 'tr',
  city: 'Ankara',
  connectedSources: { email: false, bankStatement: false, social: false },
};
```

## 7. Save changes with Git (commit and push)

After finishing a small logical piece:

```bash
git status
git add src/features/personal-intelligence
git commit -m "feat(profile): add onboarding and profile screens"
git push -u origin feature/melike-profile-ui
```

After the first push, later pushes can use `git push`.

**Never commit** `.env`, passwords, API keys, real bank statements, personal emails, `node_modules`, or private customer data. `git add .` is convenient but can include unrelated files; prefer staging your own folder.

## 8. Open a Pull Request (PR)

1. Open the GitHub repository in your browser.
2. Click **Compare & pull request** for `feature/melike-profile-ui` (or **Pull requests > New pull request**).
3. Base branch: `main`; compare branch: `feature/melike-profile-ui`.
4. Title: `feat(profile): personal intelligence UI`.
5. Describe completed screens, known limitations, screenshots, and how you tested.
6. Request review from the PM. **Do not merge your own PR.**
7. If the PM asks for changes, edit your branch, commit, and push again; the PR updates automatically.

## 9. How to stay up to date with main

When the PM tells you that shared code changed, save/commit your work first:

```bash
git switch main
git pull origin main
git switch feature/melike-profile-ui
git merge main
```

If Git reports a conflict, **stop and ask the PM** before choosing which version to keep. After resolving an approved conflict, test again and push.

## 10. Suggested milestone plan

| Milestone | Work | Evidence |
|---|---|---|
| 1 | Tools installed; app launches; branch created | Screenshot of running Expo app |
| 2 | M01–M03 | Navigable onboarding/profile demo |
| 3 | M04–M06 | Permissions and mock statement demo |
| 4 | M07–M08 | Editable preferences and alert demo |
| 5 | QA fixes and PR | Screenshots, tests, review-ready PR |

The PM will assign actual due dates through GitHub Issues.

## 11. Definition of done

- [ ] All eight screens exist and can be opened.
- [ ] Every visible button has a meaningful response or is clearly marked as a demo placeholder.
- [ ] No real external account is connected.
- [ ] Permissions are opt-in, reversible and explained.
- [ ] Demo data is visibly identified.
- [ ] UI uses shared typography, spacing and colors.
- [ ] No TypeScript errors; app launches with `npx expo start`.
- [ ] Tested on at least one phone-sized device.
- [ ] PR contains screenshots and a brief test summary.
- [ ] PM has reviewed and approved the changes.

## 12. Common problems

- **`npm` not recognized:** restart VS Code after installing Node.js; check `node -v`.
- **`npm.ps1` cannot be loaded:** use Command Prompt rather than PowerShell.
- **`git push` rejected:** check your branch name, remote access and whether you have permission; share the exact error with PM.
- **`git switch` refuses due to local changes:** commit your work before switching branches.
- **Expo QR code fails:** check phone/computer network; ask PM whether to use `npx expo start --tunnel`.

## 13. When you are blocked

Create a GitHub Issue titled `[BLOCKED][Melike] <short description>` and include: what you tried, the exact error, screenshot, and what decision you need from the PM. Do not modify another developer's files as a workaround.
