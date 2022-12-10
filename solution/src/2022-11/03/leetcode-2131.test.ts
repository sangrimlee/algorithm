import { longestPalindrome } from './leetcode-2131';

describe('2022-11-03: Leetcode 2131', () => {
  test('Example 1', () => {
    const words = ['lc', 'cl', 'gg'];
    expect(longestPalindrome(words)).toBe(6);
  });

  test('Example 2', () => {
    const words = ['ab', 'ty', 'yt', 'lc', 'cl', 'ab'];
    expect(longestPalindrome(words)).toBe(8);
  });

  test('Example 3', () => {
    const words = ['cc', 'll', 'xx'];
    expect(longestPalindrome(words)).toBe(2);
  });
});
