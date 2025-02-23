import { mergeArrays } from './2570';

describe('LeetCode 2570', () => {
  test('Example 1', () => {
    expect(
      mergeArrays(
        [
          [1, 2],
          [2, 3],
          [4, 5],
        ],
        [
          [1, 4],
          [3, 2],
          [4, 1],
        ],
      ),
    ).toEqual([
      [1, 6],
      [2, 3],
      [3, 2],
      [4, 6],
    ]);
  });
  test('Example 2', () => {
    expect(
      mergeArrays(
        [
          [2, 4],
          [3, 6],
          [5, 5],
        ],
        [
          [1, 3],
          [4, 3],
        ],
      ),
    ).toEqual([
      [1, 3],
      [2, 4],
      [3, 6],
      [4, 3],
      [5, 5],
    ]);
  });
});
