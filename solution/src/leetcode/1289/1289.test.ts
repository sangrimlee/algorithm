import { minFallingPathSum } from './1289';

describe('LeetCode 1289', () => {
  test('Example 1', () => {
    expect(
      minFallingPathSum([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toBe(13);
  });
  test('Example 2', () => {
    expect(minFallingPathSum([[7]])).toBe(7);
  });
});
