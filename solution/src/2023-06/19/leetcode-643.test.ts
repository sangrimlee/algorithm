import { findMaxAverage } from './leetcode-643';

describe('2023-06-19: LeetCode 643', () => {
  test('Example 1', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
  });
  test('Example 2', () => {
    expect(findMaxAverage([5], 1)).toBe(5.0);
  });
});
