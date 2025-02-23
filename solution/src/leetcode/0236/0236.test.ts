import { TreeNode, createTree } from '@algorithm/lib';
import { lowestCommonAncestor } from './0236';

describe('LeetCode 0236', () => {
  test('Example 1', () => {
    const root = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
    expect(lowestCommonAncestor(root, new TreeNode(5), new TreeNode(1))?.val).toBe(3);
  });
  test('Example 2', () => {
    const root = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
    expect(lowestCommonAncestor(root, new TreeNode(5), new TreeNode(4))?.val).toBe(5);
  });
  test('Example 3', () => {
    const root = createTree([1, 2]);
    expect(lowestCommonAncestor(root, new TreeNode(1), new TreeNode(2))?.val).toBe(1);
  });
});
