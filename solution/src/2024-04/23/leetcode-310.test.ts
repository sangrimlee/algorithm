import { findMinHeightTrees } from './leetcode-310';

describe('2024-04-23: LeetCode 310', () => {
  test('Example 1', () => {
    expect(
      findMinHeightTrees(4, [
        [1, 0],
        [1, 2],
        [1, 3],
      ]),
    ).toEqual([1]);
  });
  test('Example 2', () => {
    expect(
      findMinHeightTrees(6, [
        [3, 0],
        [3, 1],
        [3, 2],
        [3, 4],
        [5, 4],
      ]),
    ).toEqual([3, 4]);
  });
});
