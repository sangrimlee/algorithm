import { timeLimit } from './2637';

describe('LeetCode 2637', () => {
  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  test('Example 1', async () => {
    const fn = async (n: number) => {
      await sleep(100);
      return n * n;
    };
    await expect(timeLimit(fn, 50)(5)).rejects.toBe('Time Limit Exceeded');
  });

  test('Example 2', async () => {
    const fn = async (n: number) => {
      await sleep(100);
      return n * n;
    };

    await expect(timeLimit(fn, 150)(5)).resolves.toBe(25);
  });

  test('Example 3', async () => {
    const fn = async (a: number, b: number) => {
      await sleep(120);
      return a + b;
    };

    await expect(timeLimit(fn, 150)(5, 10)).resolves.toBe(15);
  });

  test('Example 4', async () => {
    const error = new Error('Error');
    const fn = () => {
      throw error;
    };

    await expect(timeLimit(fn, 150)()).rejects.toEqual(error);
  });
});
