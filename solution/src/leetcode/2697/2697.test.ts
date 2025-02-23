import { makeSmallestPalindrome } from './2697';

describe('LeetCode 2697', () => {
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
