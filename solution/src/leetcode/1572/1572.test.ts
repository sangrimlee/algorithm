import { diagonalSum } from './1572';

describe('LeetCode 1572', () => {
  test('Example 1', () => {
    const mat = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(diagonalSum(mat)).toBe(25);
  });
  test('Example 2', () => {
    const mat = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ];
    expect(diagonalSum(mat)).toBe(8);
  });
  test('Example 3', () => {
    const mat = [[5]];
    expect(diagonalSum(mat)).toBe(5);
  });
});
