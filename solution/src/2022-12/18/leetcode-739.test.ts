import { dailyTemperatures } from './leetcode-739';

describe('2022-12-18: LeetCode 739', () => {
  test('Example 1', () => {
    const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
    expect(dailyTemperatures(temperatures)).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });

  test('Example 2', () => {
    const temperatures = [30, 40, 50, 60];
    expect(dailyTemperatures(temperatures)).toEqual([1, 1, 1, 0]);
  });

  test('Example 3', () => {
    const temperatures = [30, 60, 90];
    expect(dailyTemperatures(temperatures)).toEqual([1, 1, 0]);
  });
});
