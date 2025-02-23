import { lengthOfLongestSubstring } from './0003';

describe('LeetCode 0003', () => {
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
