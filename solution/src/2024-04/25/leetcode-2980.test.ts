import { hasTrailingZeros } from './leetcode-2980';

describe('2024-04-25: LeetCode 2980', () => {
  test('Example 1', () => {
    expect(hasTrailingZeros([1, 2, 3, 4, 5])).toBe(true);
  });
  test('Example 2', () => {
    expect(hasTrailingZeros([2, 4, 8, 16])).toBe(true);
  });
  test('Example 3', () => {
    expect(hasTrailingZeros([1, 3, 5, 7, 9])).toBe(false);
  });
});
