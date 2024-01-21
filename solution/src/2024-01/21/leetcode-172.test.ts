import { trailingZeroes } from './leetcode-172';

describe('2024-01-21: LeetCode 172', () => {
  test('Example 1', () => {
    expect(trailingZeroes(3)).toBe(0);
  });
  test('Example 2', () => {
    expect(trailingZeroes(5)).toBe(1);
  });
  test('Example 3', () => {
    expect(trailingZeroes(0)).toBe(0);
  });
});
