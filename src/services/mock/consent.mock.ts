import type { ConsentService } from '@/services';
import { clone, nowIso, run } from './base';
import { consents } from './sampleData';

let list = clone(consents);

export const mockConsentService: ConsentService = {
  getConsents: () => run('consent', () => clone(list)),
  // isAllowed is called before every data read, so it answers at once (no delay).
  isAllowed: async (scope) => list.find((c) => c.scope === scope)?.allowed ?? false,
  setAllowed: (scope, allowed) =>
    run('consent', () => {
      const i = list.findIndex((c) => c.scope === scope);
      const next = { scope, allowed, updatedAt: nowIso() };
      if (i >= 0) list[i] = next;
      else list.push(next);
      return clone(next);
    }),
};

export function resetConsentMock() {
  list = clone(consents);
}
