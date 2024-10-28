import { longestSquareStreak } from './leetcode-2501';

describe('2024-10-28: LeetCode 2501', () => {
  test('Example 1', () => {
    expect(longestSquareStreak([4, 3, 6, 16, 8, 2])).toBe(3);
  });
  test('Example 2', () => {
    expect(longestSquareStreak([2, 3, 5, 6, 7])).toBe(-1);
  });
});
