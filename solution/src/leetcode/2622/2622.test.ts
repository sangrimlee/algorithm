import { TimeLimitedCache } from './2622';

describe('LeetCode 2622', () => {
  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  test('Example 1', async () => {
    const timeLimitCache = new TimeLimitedCache();

    expect(timeLimitCache.set(1, 42, 100)).toBeFalsy();
    await sleep(50);
    expect(timeLimitCache.get(1)).toBe(42);
    expect(timeLimitCache.count()).toBe(1);
    await sleep(100);
    expect(timeLimitCache.get(1)).toBe(-1);
  });

  test('Example 2', async () => {
    const timeLimitCache = new TimeLimitedCache();

    expect(timeLimitCache.set(1, 42, 100)).toBeFalsy();
    await sleep(40);
    expect(timeLimitCache.set(1, 50, 100)).toBeTruthy();
    await sleep(10);
    expect(timeLimitCache.get(1)).toBe(50);
    await sleep(70);
    expect(timeLimitCache.get(1)).toBe(50);
    await sleep(80);
    expect(timeLimitCache.get(1)).toBe(-1);
    expect(timeLimitCache.count()).toBe(0);
  });
});
