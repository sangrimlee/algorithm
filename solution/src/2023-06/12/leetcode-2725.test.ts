import { cancellable } from './leetcode-2725';

describe('2023-06-12: LeetCode 2725', () => {
  test('Example 1', () => {
    jest.useFakeTimers();

    const result: { time: number; returned: number }[] = [];

    const fn = (x: number) => x * 2;
    const args = [4];
    const intervalTime = 20;
    const cancelTime = 110;

    const start = performance.now();

    const log = (x: number) => {
      result.push({ time: Math.floor(performance.now() - start), returned: fn(x) });
    };

    const cancel = cancellable(log, args, intervalTime);

    setTimeout(() => {
      cancel();
    }, cancelTime);

    jest.runAllTimers();

    expect(result).toEqual([
      { time: 0, returned: 8 },
      { time: 20, returned: 8 },
      { time: 40, returned: 8 },
      { time: 60, returned: 8 },
      { time: 80, returned: 8 },
      { time: 100, returned: 8 },
    ]);
  });
});
