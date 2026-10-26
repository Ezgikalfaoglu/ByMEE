import type { ProfileService } from '@/services';
import { clone, run } from './base';
import { profile } from './sampleData';

let current = clone(profile);

export const mockProfileService: ProfileService = {
  getProfile: () => run('profile', () => clone(current)),
  updateProfile: (patch) =>
    run('profile', () => {
      current = { ...current, ...patch };
      return clone(current);
    }),
};

/** "Reset demo data" (BM-004). */
export function resetProfileMock() {
  current = clone(profile);
}
