import { findShortestSubArray } from './leetcode-697';

describe('2023-10-23: LeetCode 697', () => {
  test('Example 1', () => {
    expect(findShortestSubArray([1, 2, 2, 3, 1])).toBe(2);
  });
  test('Example 2', () => {
    expect(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])).toBe(6);
  });
});
