import { findDifference } from './leetcode-2215';

describe('2023-05-03: LeetCode 2215', () => {
  test('Example 1', () => {
    expect(findDifference([1, 2, 3], [2, 4, 6])).toEqual([
      [1, 3],
      [4, 6],
    ]);
  });
  test('Example 2', () => {
    expect(findDifference([1, 2, 3, 3], [1, 1, 2, 2])).toEqual([[3], []]);
  });
});
