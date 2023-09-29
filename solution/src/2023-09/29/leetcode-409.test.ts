import { longestPalindrome } from './leetcode-409';

describe('2023-09-29: LeetCode 409', () => {
  test('Example 1', () => {
    expect(longestPalindrome('abccccdd')).toBe(7);
  });
  test('Example 2', () => {
    expect(longestPalindrome('a')).toBe(1);
  });
});
