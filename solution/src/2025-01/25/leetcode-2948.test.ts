import { lexicographicallySmallestArray } from './leetcode-2948';

describe('2025-01-25: LeetCode 2948', () => {
  test('Example 1', () => {
    expect(lexicographicallySmallestArray([1, 5, 3, 9, 8], 2)).toEqual([1, 3, 5, 8, 9]);
  });
  test('Example 2', () => {
    expect(lexicographicallySmallestArray([1, 7, 6, 18, 2, 1], 3)).toEqual([1, 6, 7, 18, 1, 2]);
  });
  test('Example 3', () => {
    expect(lexicographicallySmallestArray([1, 7, 28, 19, 10], 3)).toEqual([1, 7, 28, 19, 10]);
  });
});
