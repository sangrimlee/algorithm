import { breakPalindrome } from './1328';

describe('LeetCode 1328', () => {
  test('Example 1', () => {
    expect(breakPalindrome('abccba')).toBe('aaccba');
  });

  test('Example 2', () => {
    expect(breakPalindrome('a')).toBe('');
  });

  test('Example 3', () => {
    expect(breakPalindrome('aba')).toBe('abb');
  });

  test('Example 4', () => {
    expect(breakPalindrome('aabaa')).toBe('aabab');
  });
});
