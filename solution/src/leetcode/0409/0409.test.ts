import { longestPalindrome } from './0409';

describe('LeetCode 0409', () => {
  test('Example 1', () => {
    expect(longestPalindrome('abccccdd')).toBe(7);
  });
  test('Example 2', () => {
    expect(longestPalindrome('a')).toBe(1);
  });
});
