import { createTree } from '@algorithm/lib';
import { verticalTraversal } from './leetcode-987';

describe('2022-09-04: LeetCode 987', () => {
  test('Example 1', () => {
    const root = createTree([3, 9, 20, null, null, 15, 7]);
    expect(verticalTraversal(root)).toEqual([[9], [3, 15], [20], [7]]);
  });

  test('Example 2', () => {
    const root = createTree([1, 2, 3, 4, 5, 6, 7]);
    expect(verticalTraversal(root)).toEqual([[4], [2], [1, 5, 6], [3], [7]]);
  });

  test('Example 2', () => {
    const root = createTree([1, 2, 3, 4, 6, 5, 7]);
    expect(verticalTraversal(root)).toEqual([[4], [2], [1, 5, 6], [3], [7]]);
  });
});
