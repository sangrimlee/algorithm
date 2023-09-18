import { kWeakestRows } from './leetcode-1337';

describe('2023-09-18: LeetCode 1337', () => {
  test('Example 1', () => {
    expect(
      kWeakestRows(
        [
          [1, 1, 0, 0, 0],
          [1, 1, 1, 1, 0],
          [1, 0, 0, 0, 0],
          [1, 1, 0, 0, 0],
          [1, 1, 1, 1, 1],
        ],
        3,
      ),
    ).toEqual([2, 0, 3]);
  });
  test('Example 2', () => {
    expect(
      kWeakestRows(
        [
          [1, 0, 0, 0],
          [1, 1, 1, 1],
          [1, 0, 0, 0],
          [1, 0, 0, 0],
        ],
        2,
      ),
    ).toEqual([0, 2]);
  });
});
