import { validArrangement } from './leetcode-2097';

describe('2024-11-30: LeetCode 2097', () => {
  test('Example 1', () => {
    expect(
      validArrangement([
        [5, 1],
        [4, 5],
        [11, 9],
        [9, 4],
      ]),
    ).toEqual([
      [11, 9],
      [9, 4],
      [4, 5],
      [5, 1],
    ]);
  });
  test('Example 2', () => {
    expect(
      validArrangement([
        [1, 3],
        [3, 2],
        [2, 1],
      ]),
    ).toEqual([
      [1, 3],
      [3, 2],
      [2, 1],
    ]);
  });
  test('Example 3', () => {
    expect(
      validArrangement([
        [1, 2],
        [1, 3],
        [2, 1],
      ]),
    ).toEqual([
      [1, 2],
      [2, 1],
      [1, 3],
    ]);
  });
});
