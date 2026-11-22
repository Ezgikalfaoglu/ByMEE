/** Puts every mock back to its defaults. Tests and the dev menu call this. Each module adds its own reset here. */

import { resetAuthorityMock } from '@/features/authority/data/authority.mock';
import { resetMockConfig } from '../mockConfig';

export function resetAllMocks() {
  resetMockConfig();
  resetAuthorityMock();
}
