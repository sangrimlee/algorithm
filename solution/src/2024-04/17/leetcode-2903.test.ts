import { findIndices } from './leetcode-2903';

describe('2024-04-17: LeetCode 2903', () => {
  test('Example 1', () => {
    expect(findIndices([5, 1, 4, 1], 2, 4)).toEqual([0, 3]);
  });
  test('Example 2', () => {
    expect(findIndices([2, 1], 0, 0)).toEqual([0, 0]);
  });
  test('Example 3', () => {
    expect(findIndices([1, 2, 3], 2, 4)).toEqual([-1, -1]);
  });
});
