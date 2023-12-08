import { combinationSum } from './leetcode-39';

describe('2023-12-08: LeetCode 39', () => {
  test('Example 1', () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
  });
  test('Example 2', () => {
    expect(combinationSum([2, 3, 5], 8)).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ]);
  });
  test('Example 3', () => {
    expect(combinationSum([2], 1)).toEqual([]);
  });
});
