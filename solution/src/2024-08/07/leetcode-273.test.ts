import { numberToWords } from './leetcode-273';

describe('2024-08-07: LeetCode 273', () => {
  test('Example 1', () => {
    expect(numberToWords(123)).toBe('One Hundred Twenty Three');
  });
  test('Example 2', () => {
    expect(numberToWords(12345)).toBe('Twelve Thousand Three Hundred Forty Five');
  });
  test('Example 3', () => {
    expect(numberToWords(1234567)).toBe(
      'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven',
    );
  });
});
