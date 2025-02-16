import type { TreeNode } from '@algorithm/lib';

/**
 * 783. Minimum Distance Between BST Nodes
 * https://leetcode.com/problems/minimum-distance-between-bst-nodes
 */
export function minDiffInBST(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let result = Number.MAX_SAFE_INTEGER;
  let prevValue = Number.MIN_SAFE_INTEGER;
  const inorder = (node: TreeNode) => {
    if (node.left) {
      inorder(node.left);
    }
    result = Math.min(result, node.val - prevValue);
    prevValue = node.val;
    if (node.right) {
      inorder(node.right);
    }
  };
  inorder(root);
  return result;
}
