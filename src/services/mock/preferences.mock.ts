import type { PreferenceService } from '@/services';
import { clone, nowIso, run } from './base';
import { preferences } from './sampleData';

let list = clone(preferences);

export const mockPreferenceService: PreferenceService = {
  getPreferences: (category) =>
    run('preferences', () => clone(list.filter((p) => p.isActive && (!category || p.category === category)))),
  savePreference: (preference) =>
    run('preferences', () => {
      // "ByMEE noticed" is always soft (BM-018).
      const saved = { ...preference, strength: preference.source === 'noticed' ? 'nice' : preference.strength, updatedAt: nowIso() } as typeof preference;
      const i = list.findIndex((p) => p.id === saved.id);
      if (i >= 0) list[i] = saved;
      else list.push(saved);
      return clone(saved);
    }),
  removePreference: (id) =>
    run('preferences', () => {
      list = list.filter((p) => p.id !== id);
    }),
};

export function resetPreferencesMock() {
  list = clone(preferences);
}
