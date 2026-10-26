import type { ResearchProgress, ResearchService } from '@/services';
import type { ResearchRequest } from '@/types/models';
import { clone, nextId, nowIso, run } from './base';
import { options, researchRequest } from './sampleData';

const requests = new Map<string, ResearchRequest>([[researchRequest.id, clone(researchRequest)]]);
/** When each request started, to animate progress over ~8 seconds (BM-014). */
const startedAt = new Map<string, number>([[researchRequest.id, 0]]);

const STEP_NAMES: ResearchProgress['steps'][number]['name'][] = ['found', 'budget check', 'details check', 'ranking'];
const TOTAL_MS = 8000;

function progressFor(requestId: string): ResearchProgress {
  const started = startedAt.get(requestId) ?? 0;
  const elapsed = started === 0 ? TOTAL_MS : Date.now() - started;
  const percent = Math.min(100, Math.round((elapsed / TOTAL_MS) * 100));
  const doneSteps = Math.floor((percent / 100) * STEP_NAMES.length);
  return {
    requestId,
    percent,
    secondsLeft: Math.max(0, Math.ceil((TOTAL_MS - elapsed) / 1000)),
    steps: STEP_NAMES.map((name, i) => ({ name, done: i < doneSteps, count: i < doneSteps ? [12, 5, 3, 3][i] : undefined })),
  };
}

export const mockResearchService: ResearchService = {
  createRequest: (input) =>
    run('research', () => {
      const created: ResearchRequest = { ...input, id: nextId('req'), status: 'running', createdAt: nowIso() };
      requests.set(created.id, created);
      startedAt.set(created.id, Date.now());
      return clone(created);
    }),
  getProgress: (requestId) =>
    run('research', () => {
      const p = progressFor(requestId);
      const req = requests.get(requestId);
      if (req && p.percent >= 100 && req.status === 'running') req.status = 'done';
      return p;
    }),
  getOptions: (requestId) =>
    run('research', () => {
      // The sample options belong to the demo request; new requests reuse them for the MVP.
      const req = requests.get(requestId);
      if (!req) return [];
      return clone(options.map((o) => ({ ...o, requestId })));
    }),
};

export function resetResearchMock() {
  requests.clear();
  requests.set(researchRequest.id, clone(researchRequest));
  startedAt.clear();
  startedAt.set(researchRequest.id, 0);
}
