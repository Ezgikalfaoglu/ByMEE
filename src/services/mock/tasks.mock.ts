import type { TaskService } from '@/services';
import { ServiceError } from '../errors';
import type { Gate, Task } from '@/types/models';
import { clone, nextId, nowIso, run } from './base';
import { gate, task } from './sampleData';

const tasks = new Map<string, Task>([[task.id, clone(task)]]);
const gates = new Map<string, Gate>([[gate.id, clone(gate)]]);

function mustTask(id: string) {
  const t = tasks.get(id);
  if (!t) throw new ServiceError('Task not found.', 'tasks');
  return t;
}

export const mockTaskService: TaskService = {
  listTasks: () =>
    run('tasks', () =>
      // Tasks with a gate come first (BM-020).
      clone([...tasks.values()].sort((a, b) => Number(Boolean(b.gateId)) - Number(Boolean(a.gateId)))),
    ),
  getTask: (taskId) => run('tasks', () => clone(mustTask(taskId))),
  updateStatus: (taskId, status) =>
    run('tasks', () => {
      const t = mustTask(taskId);
      t.status = status;
      t.updatedAt = nowIso();
      return clone(t);
    }),
  addKnot: (taskId, knot) =>
    run('tasks', () => {
      const t = mustTask(taskId);
      t.knots.push({ ...knot, id: nextId('knot') });
      t.knots.sort((a, b) => a.time.localeCompare(b.time));
      t.updatedAt = nowIso();
      return clone(t);
    }),
  getGate: (gateId) =>
    run('tasks', () => {
      const g = gates.get(gateId);
      if (!g) throw new ServiceError('Gate not found.', 'tasks');
      return clone(g);
    }),
  closeGate: (gateId, status) =>
    run('tasks', () => {
      const g = gates.get(gateId);
      if (!g) throw new ServiceError('Gate not found.', 'tasks');
      g.status = status;
      g.closedAt = nowIso();
      const t = tasks.get(g.taskId);
      if (t && t.gateId === gateId) {
        t.gateId = undefined;
        // The gate knot becomes a done knot, or stays with "Not approved" (BM-016).
        const k = t.knots.find((x) => x.gateId === gateId);
        if (k) {
          k.kind = status === 'approved' ? 'done' : 'gate';
          if (status === 'not-approved') k.detail = 'Not approved';
        }
        t.updatedAt = nowIso();
      }
      return clone(g);
    }),
};

export function resetTasksMock() {
  tasks.clear();
  tasks.set(task.id, clone(task));
  gates.clear();
  gates.set(gate.id, clone(gate));
}
