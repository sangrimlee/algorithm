import { fractionToDecimal } from './leetcode-166';

describe('2024-01-21: LeetCode 166', () => {
  test('Example 1', () => {
    expect(fractionToDecimal(1, 2)).toBe('0.5');
  });
  test('Example 2', () => {
    expect(fractionToDecimal(2, 1)).toBe('2');
  });
  test('Example 3', () => {
    expect(fractionToDecimal(4, 333)).toBe('0.(012)');
  });
});
