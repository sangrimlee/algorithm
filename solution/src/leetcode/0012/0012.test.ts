import { intToRoman } from './0012';

describe('LeetCode 0012', () => {
  test('Example 1', () => {
    expect(intToRoman(1)).toBe('I');
  });
  test('Example 2', () => {
    expect(intToRoman(3)).toBe('III');
  });
  test('Example 3', () => {
    expect(intToRoman(58)).toBe('LVIII');
  });
  test('Example 4', () => {
    expect(intToRoman(1994)).toBe('MCMXCIV');
  });
});
