import { onesMinusZeros } from './leetcode-2482';

describe('2023-12-14: LeetCode 2482', () => {
  test('Example 1', () => {
    expect(
      onesMinusZeros([
        [0, 1, 1],
        [1, 0, 1],
        [0, 0, 1],
      ]),
    ).toEqual([
      [0, 0, 4],
      [0, 0, 4],
      [-2, -2, 2],
    ]);
  });
  test('Example 2', () => {
    expect(
      onesMinusZeros([
        [1, 1, 1],
        [1, 1, 1],
      ]),
    ).toEqual([
      [5, 5, 5],
      [5, 5, 5],
    ]);
  });
});
