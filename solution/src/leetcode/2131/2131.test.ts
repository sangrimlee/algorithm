import { longestPalindrome } from './2131';

describe('LeetCode 2131', () => {
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
