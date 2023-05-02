import { TreeNode } from '@algorithm/lib';

/**
 * 112. Path Sum
 * https://leetcode.com/problems/path-sum/
 */
export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) {
    return false;
  }

  if (root.left === null && root.right === null && root.val === targetSum) {
    return true;
  }

  return (
    hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
  );
}
