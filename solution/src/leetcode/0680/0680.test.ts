import { validPalindrome } from './0680';

describe('LeetCode 0680', () => {
  test('Example 1', () => {
    expect(validPalindrome('aba')).toBe(true);
  });
  test('Example 2', () => {
    expect(validPalindrome('abca')).toBe(true);
  });
  test('Example 3', () => {
    expect(validPalindrome('abc')).toBe(false);
  });
});
