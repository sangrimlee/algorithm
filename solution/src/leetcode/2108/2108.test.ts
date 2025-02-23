import { firstPalindrome } from './2108';

describe('LeetCode 2108', () => {
  test('Example 1', () => {
    expect(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool'])).toBe('ada');
  });
  test('Example 2', () => {
    expect(firstPalindrome(['notapalindrome', 'racecar'])).toBe('racecar');
  });
  test('Example 3', () => {
    expect(firstPalindrome(['def', 'ghi'])).toBe('');
  });
});
