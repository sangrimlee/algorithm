import { shortestPalindrome } from './0214';

describe('LeetCode 0214', () => {
  test('Example 1', () => {
    expect(shortestPalindrome('aacecaaa')).toBe('aaacecaaa');
  });
  test('Example 2', () => {
    expect(shortestPalindrome('abcd')).toBe('dcbabcd');
  });
});
