import { construct2DArray } from './leetcode-2022';

describe('2024-01-23: LeetCode 2022', () => {
  test('Example 1', () => {
    expect(construct2DArray([1, 2, 3, 4], 2, 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
  test('Example 2', () => {
    expect(construct2DArray([1, 2, 3], 1, 3)).toEqual([[1, 2, 3]]);
  });
  test('Example 3', () => {
    expect(construct2DArray([1, 2], 1, 1)).toEqual([]);
  });
});
