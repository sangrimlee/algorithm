import { promiseAll } from './leetcode-2721';

describe('2023-06-12: LeetCode 2721', () => {
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
          reject(reason);
        }, ms);
      });
  };

  test('Example 1', () => {
    expect(promiseAll([waitAndResolve(5, 200)])).resolves.toEqual([5]);
  });

  test('Example 2', () => {
    expect(promiseAll([waitAndResolve(5, 200), waitAndReject('Error', 100)])).rejects.toEqual(
      'Error',
    );
  });

  test('Example 3', () => {
    expect(
      promiseAll([waitAndResolve(4, 50), waitAndResolve(10, 150), waitAndResolve(16, 100)]),
    ).resolves.toEqual([4, 10, 16]);
  });
});
