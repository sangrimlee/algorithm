import { createTree } from '@algorithm/lib';
import { treeQueries } from './2458';

describe('LeetCode 2458', () => {
  test('Example 1', () => {
    expect(
      treeQueries(createTree([1, 3, 4, 2, null, 6, 5, null, null, null, null, null, 7]), [4]),
    ).toEqual([2]);
  });
  test('Example 2', () => {
    expect(treeQueries(createTree([5, 8, 9, 2, 1, 3, 7, 4, 6]), [3, 2, 4, 8])).toEqual([
      3, 2, 3, 2,
    ]);
  });
});
