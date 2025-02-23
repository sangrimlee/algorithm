import { reconstructQueue } from './0406';

describe('LeetCode 0406', () => {
  test('Example 1', () => {
    expect(
      reconstructQueue([
        [7, 0],
        [4, 4],
        [7, 1],
        [5, 0],
        [6, 1],
        [5, 2],
      ]),
    ).toEqual([
      [5, 0],
      [7, 0],
      [5, 2],
      [6, 1],
      [4, 4],
      [7, 1],
    ]);
  });

  test('Example 2', () => {
    expect(
      reconstructQueue([
        [6, 0],
        [5, 0],
        [4, 0],
        [3, 2],
        [2, 2],
        [1, 4],
      ]),
    ).toEqual([
      [4, 0],
      [5, 0],
      [2, 2],
      [3, 2],
      [1, 4],
      [6, 0],
    ]);
  });
});
