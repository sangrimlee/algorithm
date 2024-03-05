import { findMaxK } from './leetcode-2441';

describe('2024-03-05: LeetCode 2441', () => {
  test('Example 1', () => {
    expect(findMaxK([-1, 2, -3, 3])).toBe(3);
  });
  test('Example 2', () => {
    expect(findMaxK([-1, 10, 6, 7, -7, 1])).toBe(7);
  });
  test('Example 3', () => {
    expect(findMaxK([-10, 8, 6, 7, -2, -3])).toBe(-1);
  });
});
