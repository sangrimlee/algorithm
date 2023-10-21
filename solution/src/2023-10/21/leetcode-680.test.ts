import { validPalindrome } from './leetcode-680';

describe('2023-10-21: LeetCode 680', () => {
  test('Example 1', () => {
    expect(validPalindrome('aba')).toEqual(true);
  });
  test('Example 2', () => {
    expect(validPalindrome('abca')).toEqual(true);
  });
  test('Example 3', () => {
    expect(validPalindrome('abc')).toEqual(false);
  });
});
