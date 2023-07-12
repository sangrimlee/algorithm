import { TreeNode, createTree } from '@algorithm/lib';
import { distanceK } from './leetcode-863';

describe('2023-07-11: LeetCode 863', () => {
  test('Example 1', () => {
    const rootNode = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
    const targetNode = new TreeNode(5);
    expect(distanceK(rootNode, targetNode, 2).sort((a, b) => a - b)).toEqual([1, 4, 7]);
  });
  test('Example 2', () => {
    const rootNode = createTree([1]);
    const targetNode = new TreeNode(1);
    expect(distanceK(rootNode, targetNode, 3)).toEqual([]);
  });
});
