import { TreeNode } from '@lib/create-tree';

/**
 * 938. Range Sum of BST
 * https://leetcode.com/problems/range-sum-of-bst/
 */
export function rangeSumBST(
  root: TreeNode | null,
  low: number,
  high: number
): number {
  if (root === null) {
    return 0;
  }
  if (low <= root.val && root.val <= high) {
    return (
      root.val +
      rangeSumBST(root.left, low, high) +
      rangeSumBST(root.right, low, high)
    );
  } else if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  } else {
    return rangeSumBST(root.left, low, high);
  }
}
