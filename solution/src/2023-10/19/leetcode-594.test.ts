import { findLHS } from './leetcode-594';

describe('2023-10-19: LeetCode 594', () => {
  test('Example 1', () => {
    expect(findLHS([1, 3, 2, 2, 5, 2, 3, 7])).toBe(5);
  });
  test('Example 2', () => {
    expect(findLHS([1, 2, 3, 4])).toBe(2);
  });
  test('Example 3', () => {
    expect(findLHS([1, 1, 1, 1])).toBe(0);
  });
});
