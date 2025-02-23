import { longestSquareStreak } from './2501';

describe('LeetCode 2501', () => {
  test('Example 1', () => {
    expect(longestSquareStreak([4, 3, 6, 16, 8, 2])).toBe(3);
  });
  test('Example 2', () => {
    expect(longestSquareStreak([2, 3, 5, 6, 7])).toBe(-1);
  });
});
