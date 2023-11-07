import { TreeNode } from '@algorithm/lib';

/**
 * 965. Univalued Binary Tree
 * https://leetcode.com/problems/univalued-binary-tree
 */
export function isUnivalTree(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  const leftValue = root.left?.val ?? root.val;
  const rightValue = root.right?.val ?? root.val;
  if (root.val !== leftValue || root.val !== rightValue) {
    return false;
  }
  return isUnivalTree(root.left) && isUnivalTree(root.right);
}
