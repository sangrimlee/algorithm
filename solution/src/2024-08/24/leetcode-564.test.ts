import { nearestPalindromic } from './leetcode-564';

describe('2024-08-24: LeetCode 564', () => {
  test('Example 1', () => {
    expect(nearestPalindromic('123')).toBe('121');
  });
  test('Example 2', () => {
    expect(nearestPalindromic('1')).toBe('0');
  });
  test('Example 3', () => {
    expect(nearestPalindromic('2')).toBe('1');
  });
  test('Example 4', () => {
    expect(nearestPalindromic('10')).toBe('9');
  });
  test('Example 5', () => {
    expect(nearestPalindromic('11')).toBe('9');
  });
  test('Example 6', () => {
    expect(nearestPalindromic('100')).toBe('99');
  });
  test('Example 7', () => {
    expect(nearestPalindromic('99')).toBe('101');
  });
});
