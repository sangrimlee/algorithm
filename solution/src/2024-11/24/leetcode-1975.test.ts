import { maxMatrixSum } from './leetcode-1975';

describe('2024-11-24: LeetCode 1975', () => {
  test('Example 1', () => {
    expect(
      maxMatrixSum([
        [1, -1],
        [-1, 1],
      ]),
    ).toBe(4);
  });
  test('Example 2', () => {
    expect(
      maxMatrixSum([
        [1, 2, 3],
        [-1, -2, -3],
        [1, 2, 3],
      ]),
    ).toBe(16);
  });
});
