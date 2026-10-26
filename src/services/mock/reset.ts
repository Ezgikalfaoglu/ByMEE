/** Puts every mock back to the sample data. "Reset demo data" (BM-004) and tests call this. */

import { resetMockConfig } from '../mockConfig';
import { resetActionsMock } from './actions.mock';
import { resetBookingMock } from './booking.mock';
import { resetCallsMock } from './calls.mock';
import { resetConsentMock } from './consent.mock';
import { resetOffersMock } from './offers.mock';
import { resetPreferencesMock } from './preferences.mock';
import { resetProfileMock } from './profile.mock';
import { resetResearchMock } from './research.mock';
import { resetTasksMock } from './tasks.mock';

export function resetAllMocks() {
  resetMockConfig();
  resetProfileMock();
  resetPreferencesMock();
  resetConsentMock();
  resetResearchMock();
  resetTasksMock();
  resetActionsMock();
  resetCallsMock();
  resetOffersMock();
  resetBookingMock();
}
