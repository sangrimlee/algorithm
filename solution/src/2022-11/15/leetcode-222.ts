import { TreeNode } from '@algorithm/lib';

/**
 * 222. Count Complete Tree Nodes
 * https://leetcode.com/problems/count-complete-tree-nodes/
 */
export function countNodes(root: TreeNode | null): number {
  if (root === null) return 0;
  return countNodes(root.left) + countNodes(root.right) + 1;
}
