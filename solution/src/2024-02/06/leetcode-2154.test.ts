import { findFinalValue } from './leetcode-2154';

describe('2024-02-06: LeetCode 2154', () => {
  test('Example 1', () => {
    expect(findFinalValue([5, 3, 6, 1, 12], 3)).toBe(24);
  });
  test('Example 2', () => {
    expect(findFinalValue([2, 7, 9], 4)).toBe(4);
  });
});
