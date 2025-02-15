import type { TreeNode } from '@algorithm/lib';

/**
 * 2236. Root Equals Sum of Children
 * https://leetcode.com/problems/root-equals-sum-of-children
 */
export function checkTree(root: TreeNode | null): boolean {
  return !root || root.val === (root.left?.val ?? 0) + (root.right?.val ?? 0);
}
