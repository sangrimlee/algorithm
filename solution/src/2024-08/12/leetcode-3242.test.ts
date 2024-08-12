import { NeighborSum } from './leetcode-3242';

describe('2024-08-12: LeetCode 3242', () => {
  test('Example 1', () => {
    const neighborSum = new NeighborSum([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ]);
    expect(neighborSum.adjacentSum(1)).toBe(6);
    expect(neighborSum.adjacentSum(4)).toBe(16);
    expect(neighborSum.diagonalSum(4)).toBe(16);
    expect(neighborSum.diagonalSum(8)).toBe(4);
  });
  test('Example 2', () => {
    const neighborSum = new NeighborSum([
      [1, 2, 0, 3],
      [4, 7, 15, 6],
      [8, 9, 10, 11],
      [12, 13, 14, 5],
    ]);
    expect(neighborSum.adjacentSum(15)).toBe(23);
    expect(neighborSum.diagonalSum(9)).toBe(45);
  });
});
