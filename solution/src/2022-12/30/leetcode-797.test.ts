import { allPathsSourceTarget } from './leetcode-797';

describe('2022-12-30: LeetCode 797', () => {
  test('Example 1', () => {
    const graph = [[1, 2], [3], [3], []];
    expect(allPathsSourceTarget(graph)).toEqual([
      [0, 1, 3],
      [0, 2, 3],
    ]);
  });

  test('Example 2', () => {
    const graph = [[4, 3, 1], [3, 2, 4], [3], [4], []];
    expect(allPathsSourceTarget(graph)).toEqual([
      [0, 4],
      [0, 3, 4],
      [0, 1, 3, 4],
      [0, 1, 2, 3, 4],
      [0, 1, 4],
    ]);
  });
});
