import { threeConsecutiveOdds } from './leetcode-1550';

describe('2023-12-08: LeetCode 1550', () => {
  test('Example 1', () => {
    expect(threeConsecutiveOdds([2, 6, 4, 1])).toBe(false);
  });
  test('Example 2', () => {
    expect(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])).toBe(true);
  });
});
