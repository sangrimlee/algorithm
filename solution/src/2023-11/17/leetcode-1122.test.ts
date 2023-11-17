import { relativeSortArray } from './leetcode-1122';

describe('2023-11-17: LeetCode 1122', () => {
  test('Example 1', () => {
    expect(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])).toEqual([
      2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19,
    ]);
  });
  test('Example 2', () => {
    expect(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6])).toEqual([
      22, 28, 8, 6, 17, 44,
    ]);
  });
});
