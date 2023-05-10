import { generateMatrix } from './leetcode-59';

describe('2023-05-10: LeetCode 59', () => {
  test('Example 1', () => {
    expect(generateMatrix(3)).toEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ]);
  });
  test('Example 2', () => {
    expect(generateMatrix(1)).toEqual([[1]]);
  });
});
