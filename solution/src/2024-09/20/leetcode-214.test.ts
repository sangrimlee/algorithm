import { shortestPalindrome } from './leetcode-214';

describe('2024-09-20: LeetCode 214', () => {
  test('Example 1', () => {
    expect(shortestPalindrome('aacecaaa')).toBe('aaacecaaa');
  });
  test('Example 2', () => {
    expect(shortestPalindrome('abcd')).toBe('dcbabcd');
  });
});
