import { canSortArray } from './leetcode-3011';

describe('2024-11-06: LeetCode 3011', () => {
  test('Example 1', () => {
    expect(canSortArray([8, 4, 2, 30, 15])).toBe(true);
  });
  test('Example 2', () => {
    expect(canSortArray([1, 2, 3, 4, 5])).toBe(true);
  });
  test('Example 3', () => {
    expect(canSortArray([3, 16, 8, 4, 2])).toBe(false);
  });
});
