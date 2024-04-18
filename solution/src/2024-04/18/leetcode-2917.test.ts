import { findKOr } from './leetcode-2917';

describe('2024-04-18: LeetCode 2917', () => {
  test('Example 1', () => {
    expect(findKOr([7, 12, 9, 8, 9, 15], 4)).toBe(9);
  });

  test('Example 2', () => {
    expect(findKOr([2, 12, 1, 11, 4, 5], 6)).toBe(0);
  });

  test('Example 3', () => {
    expect(findKOr([10, 8, 5, 9, 11, 6, 8], 1)).toBe(15);
  });
});
