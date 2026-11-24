import { failNextCall, isServiceError, run, setMockDelay } from '@/services';
import { clone, hashDetails } from './base';
import { resetAllMocks } from './reset';

beforeEach(() => {
  resetAllMocks();
  setMockDelay(0);
});

describe('mock base (BM-003)', () => {
  it('marks every result simulated: true', async () => {
    const result = await run('tasks', () => ({ id: 't1' }));
    expect(result).toEqual({ data: { id: 't1' }, simulated: true });
  });

  it('waits the configured delay before answering', async () => {
    setMockDelay(50);
    const started = Date.now();
    await run('tools', () => 1);
    expect(Date.now() - started).toBeGreaterThanOrEqual(45);
  });

  it('fails the next call once, then recovers', async () => {
    failNextCall('execution', 'Yetki kontrolü yanıt vermedi.');
    await expect(run('execution', () => 1)).rejects.toMatchObject({
      message: 'Yetki kontrolü yanıt vermedi.',
      service: 'execution',
    });
    await expect(run('execution', () => 1)).resolves.toMatchObject({ data: 1 });
  });

  it('a failure is a ServiceError', async () => {
    failNextCall('simulator');
    try {
      await run('simulator', () => 1);
    } catch (error) {
      expect(isServiceError(error)).toBe(true);
    }
  });

  it('clone returns a copy, not the same object', () => {
    const a = { n: 1 };
    const b = clone(a);
    b.n = 2;
    expect(a.n).toBe(1);
  });

  it('hashDetails changes when the action details change', () => {
    expect(hashDetails({ amount: 100 })).not.toBe(hashDetails({ amount: 101 }));
    expect(hashDetails({ amount: 100 })).toBe(hashDetails({ amount: 100 }));
  });
});
