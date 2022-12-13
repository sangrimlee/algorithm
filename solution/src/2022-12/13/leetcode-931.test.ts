import { minFallingPathSum } from './leetcode-931';

describe('2022-12-13: LeetCode 931', () => {
  test('Example 1', () => {
    const matrix = [
      [2, 1, 3],
      [6, 5, 4],
      [7, 8, 9],
    ];
    expect(minFallingPathSum(matrix)).toBe(13);
  });

  test('Example 2', () => {
    const matrix = [
      [-19, 57],
      [-40, -5],
    ];
    expect(minFallingPathSum(matrix)).toBe(-59);
  });
});
