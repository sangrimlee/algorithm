import { flipAndInvertImage } from './0832';

describe('LeetCode 0832', () => {
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
