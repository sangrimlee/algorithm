import { makeSmallestPalindrome } from './leetcode-2697';

describe('2024-03-31: LeetCode 2697', () => {
  test('Example 1', () => {
    expect(makeSmallestPalindrome('egcfe')).toBe('efcfe');
  });
  test('Example 2', () => {
    expect(makeSmallestPalindrome('abcd')).toBe('abba');
  });
  test('Example 3', () => {
    expect(makeSmallestPalindrome('seven')).toBe('neven');
  });
});
