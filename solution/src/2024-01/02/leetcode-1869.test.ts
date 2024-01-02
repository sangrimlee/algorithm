import { checkZeroOnes } from './leetcode-1869';

describe('2024-01-02: LeetCode 1869', () => {
  test('Example 1', () => {
    expect(checkZeroOnes('1101')).toBe(true);
  });
  test('Example 2', () => {
    expect(checkZeroOnes('111000')).toBe(false);
  });
  test('Example 3', () => {
    expect(checkZeroOnes('110100010')).toBe(false);
  });
});
