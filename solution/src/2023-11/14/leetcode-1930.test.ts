import { countPalindromicSubsequence } from './leetcode-1930';

describe('2023-11-14: LeetCode 1930', () => {
  test('Example 1', () => {
    expect(countPalindromicSubsequence('aabca')).toBe(3);
  });
  test('Example 2', () => {
    expect(countPalindromicSubsequence('adc')).toBe(0);
  });
  test('Example 3', () => {
    expect(countPalindromicSubsequence('bbcbaba')).toBe(4);
  });
});
