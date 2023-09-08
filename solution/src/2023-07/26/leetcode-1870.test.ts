import { minSpeedOnTime } from './leetcode-1870';

describe('2023-07-26: LeetCode 1870', () => {
  test('Example 1', () => {
    expect(minSpeedOnTime([1, 3, 2], 6)).toBe(1);
  });
  test('Example 2', () => {
    expect(minSpeedOnTime([1, 3, 2], 2.7)).toBe(3);
  });
  test('Example 3', () => {
    expect(minSpeedOnTime([1, 3, 2], 1.9)).toBe(-1);
  });
});
