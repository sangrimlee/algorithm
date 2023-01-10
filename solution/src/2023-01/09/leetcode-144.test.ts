import { createTree } from '@1d1s/lib';
import { preorderTraversal } from './leetcode-144';

describe('2023-01-09: LeetCode 144', () => {
  test('Example 1', () => {
    const root = createTree([1, null, 2, null, null, 3]);
    expect(preorderTraversal(root)).toEqual([1, 2, 3]);
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
