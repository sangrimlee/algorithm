import type { TreeNode } from '@algorithm/lib';

/**
 * 404. Sum of Left Leaves
 * https://leetcode.com/problems/sum-of-left-leaves
 */
export function sumOfLeftLeaves(root: TreeNode | null): number {
  const sum = (node: TreeNode | null, isLeft = false): number => {
    if (!node) {
      return 0;
    }
    if (!node.left && !node.right) {
      return isLeft ? node.val : 0;
    }
    return sum(node.left, true) + sum(node.right, false);
  };

  return sum(root);
}
