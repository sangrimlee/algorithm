import { highestPeak } from './leetcode-1765';

describe('2025-01-22: LeetCode 1765', () => {
  test('Example 1', () => {
    expect(
      highestPeak([
        [0, 1],
        [0, 0],
      ]),
    ).toEqual([
      [1, 0],
      [2, 1],
    ]);
  });
  test('Example 2', () => {
    expect(
      highestPeak([
        [0, 0, 1],
        [1, 0, 0],
        [0, 0, 0],
      ]),
    ).toEqual([
      [1, 1, 0],
      [0, 1, 1],
      [1, 2, 2],
    ]);
  });
});
