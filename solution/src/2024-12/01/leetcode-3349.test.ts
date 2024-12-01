import { hasIncreasingSubarrays } from './leetcode-3349';

describe('2024-12-01: LeetCode 3349', () => {
  test('Example 1', () => {
    expect(hasIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1], 3)).toBe(true);
  });
  test('Example 2', () => {
    expect(hasIncreasingSubarrays([1, 2, 3, 4, 4, 4, 4, 5, 6, 7], 5)).toBe(false);
  });
  test('Example 3', () => {
    expect(hasIncreasingSubarrays([-15, 19], 1)).toBe(true);
  });
  test('Example 4', () => {
    expect(hasIncreasingSubarrays([6, 13, -17, -20, 2], 2)).toBe(false);
  });
});
