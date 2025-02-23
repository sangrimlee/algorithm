import { countPalindromicSubsequence } from './1930';

describe('LeetCode 1930', () => {
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
