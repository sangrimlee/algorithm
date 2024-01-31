import { maxSubsequence } from './leetcode-2099';

describe('2024-01-31: LeetCode 2099', () => {
  test('Example 1', () => {
    expect(maxSubsequence([2, 1, 3, 3], 2)).toEqual([3, 3]);
  });
  test('Example 2', () => {
    expect(maxSubsequence([-1, -2, 3, 4], 3)).toEqual([-1, 3, 4]);
  });
  test('Example 3', () => {
    expect(maxSubsequence([3, 4, 3, 3], 2)).toEqual([3, 4]);
  });
});
