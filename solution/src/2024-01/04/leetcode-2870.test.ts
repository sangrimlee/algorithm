import { minOperations } from './leetcode-2870';

describe('2024-01-04: LeetCode 2870', () => {
  test('Example 1', () => {
    expect(minOperations([2, 3, 3, 2, 2, 4, 2, 3, 4])).toBe(4);
  });
  test('Example 2', () => {
    expect(minOperations([2, 1, 2, 2, 3, 3])).toBe(-1);
  });
  test('Example 3', () => {
    expect(
      minOperations([14, 12, 14, 14, 12, 14, 14, 12, 12, 12, 12, 14, 14, 12, 14, 14, 14, 12, 12]),
    ).toBe(7);
  });
});
