import { createTree } from '@algorithm/lib';
import { preorderTraversal } from './leetcode-144';

describe('2023-01-09: LeetCode 144', () => {
  test('Example 1', () => {
    const root = createTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]);
    expect(preorderTraversal(root)).toEqual([1, 2, 4, 5, 6, 7, 3, 8, 9]);
  });

  test('Example 2', () => {
    const root = createTree([]);
    expect(preorderTraversal(root)).toEqual([]);
  });

  test('Example 3', () => {
    const root = createTree([1]);
    expect(preorderTraversal(root)).toEqual([1]);
  });
});
