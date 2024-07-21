import { buildMatrix } from './leetcode-2392';

describe('2024-07-21: LeetCode 2392', () => {
  test('Example 1', () => {
    expect(
      buildMatrix(
        3,
        [
          [1, 2],
          [3, 2],
        ],
        [
          [2, 1],
          [3, 2],
        ],
      ),
    ).toEqual([
      [0, 0, 1],
      [3, 0, 0],
      [0, 2, 0],
    ]);
  });
  test('Example 2', () => {
    expect(
      buildMatrix(
        3,
        [
          [1, 2],
          [2, 3],
          [3, 1],
          [2, 3],
        ],
        [[2, 1]],
      ),
    ).toEqual([]);
  });
});
