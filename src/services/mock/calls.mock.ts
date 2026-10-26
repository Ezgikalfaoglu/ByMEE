import type { CallService } from '@/services';
import { ServiceError } from '../errors';
import type { CallResult } from '@/types/models';
import { clone, nextId, nowIso, run } from './base';
import { callScripts } from './sampleData';

const results = new Map<string, CallResult>();

export const mockCallService: CallService = {
  startCall: (actionId, script = 'offer') =>
    run('calls', () => {
      if (script === 'failed') throw new ServiceError('The call didn’t go through.', 'calls');
      const base = callScripts[script];
      // The demo offer keeps its fixed id so the sample Offer links to it.
      const id = script === 'offer' ? 'call-form-room' : nextId('call');
      const result: CallResult = { ...clone(base), id, actionId, endedAt: nowIso() };
      results.set(id, result);
      return clone(result);
    }),
  getCallResult: (callResultId) =>
    run('calls', () => {
      const r = results.get(callResultId);
      if (!r) throw new ServiceError('Call summary not found.', 'calls');
      return clone(r);
    }),
  updateFact: (callResultId, factId, detail) =>
    run('calls', () => {
      const r = results.get(callResultId);
      if (!r) throw new ServiceError('Call summary not found.', 'calls');
      const f = r.facts.find((x) => x.id === factId);
      if (!f) throw new ServiceError('Fact not found.', 'calls');
      f.detail = detail;
      f.status = 'edited';
      return clone(r);
    }),
};

export function resetCallsMock() {
  results.clear();
}
