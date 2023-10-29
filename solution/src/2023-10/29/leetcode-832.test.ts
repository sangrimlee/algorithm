import { flipAndInvertImage } from './leetcode-832';

describe('2023-10-29: LeetCode 832', () => {
  test('Example 1', () => {
    expect(
      flipAndInvertImage([
        [1, 1, 0],
        [1, 0, 1],
        [0, 0, 0],
      ]),
    ).toEqual([
      [1, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ]);
  });
  test('Example 2', () => {
    expect(
      flipAndInvertImage([
        [1, 1, 0, 0],
        [1, 0, 0, 1],
        [0, 1, 1, 1],
        [1, 0, 1, 0],
      ]),
    ).toEqual([
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 1],
      [1, 0, 1, 0],
    ]);
  });
});
