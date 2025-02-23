import { findWinners } from './2225';

describe('LeetCode 2225', () => {
  test('Example 1', () => {
    const matches = [
      [1, 3],
      [2, 3],
      [3, 6],
      [5, 6],
      [5, 7],
      [4, 5],
      [4, 8],
      [4, 9],
      [10, 4],
      [10, 9],
    ];
    expect(findWinners(matches)).toEqual([
      [1, 2, 10],
      [4, 5, 7, 8],
    ]);
  });

  test('Example 2', () => {
    const matches = [
      [2, 3],
      [1, 3],
      [5, 4],
      [6, 4],
    ];
    expect(findWinners(matches)).toEqual([[1, 2, 5, 6], []]);
  });
});
