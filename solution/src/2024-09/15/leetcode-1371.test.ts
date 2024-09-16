import { findTheLongestSubstring } from './leetcode-1371';

describe('2024-09-16: LeetCode 1371', () => {
  test('Example 1', () => {
    expect(findTheLongestSubstring('eleetminicoworoep')).toBe(13);
  });
  test('Example 2', () => {
    expect(findTheLongestSubstring('leetcodeisgreat')).toBe(5);
  });
  test('Example 3', () => {
    expect(findTheLongestSubstring('bcbcbc')).toBe(6);
  });
});
