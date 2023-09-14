import { isPalindrome } from './leetcode-125';

describe('2023-09-14: LeetCode 125', () => {
  test('Example 1', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });
  test('Example 2', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });
  test('Example 3', () => {
    expect(isPalindrome(' ')).toBe(true);
  });
  test('Example 4', () => {
    expect(isPalindrome('0P')).toBe(false);
  });
});
