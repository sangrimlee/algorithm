import { lengthOfLongestSubstring } from './leetcode-3';

describe('2022-06-10: LeetCode 3', () => {
  test('Example 1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  test('Example 2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  test('Example 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });
});
