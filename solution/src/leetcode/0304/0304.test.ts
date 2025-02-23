import { NumMatrix } from './0304';

describe('LeetCode 0304', () => {
  const matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5],
  ];

  const numMatrix = new NumMatrix(matrix);

  test('Example 1', () => {
    expect(numMatrix.sumRegion(2, 1, 4, 3)).toBe(8);
  });

  test('Example 2', () => {
    expect(numMatrix.sumRegion(1, 1, 2, 2)).toBe(11);
  });

  test('Example 3', () => {
    expect(numMatrix.sumRegion(1, 2, 2, 4)).toBe(12);
  });
});
