import { promiseAll } from './2721';

describe('LeetCode 2721', () => {
  const waitAndResolve = (num: number, ms: number) => {
    return () =>
      new Promise<number>((resolve) => {
        setTimeout(() => {
          resolve(num);
        }, ms);
      });
  };

  const waitAndReject = (reason: string, ms: number) => {
    return () =>
      new Promise<number>((_, reject) => {
        setTimeout(() => {
          // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors -- It's just an example.
          reject(reason);
        }, ms);
      });
  };

  test('Example 1', async () => {
    await expect(promiseAll([waitAndResolve(5, 200)])).resolves.toEqual([5]);
  });

  test('Example 2', async () => {
    await expect(promiseAll([waitAndResolve(5, 200), waitAndReject('Error', 100)])).rejects.toBe(
      'Error',
    );
  });

  test('Example 3', async () => {
    await expect(
      promiseAll([waitAndResolve(4, 50), waitAndResolve(10, 150), waitAndResolve(16, 100)]),
    ).resolves.toEqual([4, 10, 16]);
  });
});
