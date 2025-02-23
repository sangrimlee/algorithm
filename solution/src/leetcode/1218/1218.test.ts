import { longestSubsequence } from './1218';

describe('LeetCode 1218', () => {
  test('Example 1', () => {
    expect(longestSubsequence([1, 2, 3, 4], 1)).toBe(4);
  });
  test('Example 2', () => {
    expect(longestSubsequence([1, 3, 5, 7], 1)).toBe(1);
  });
  test('Example 3', () => {
    expect(longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2)).toBe(4);
  });
});
