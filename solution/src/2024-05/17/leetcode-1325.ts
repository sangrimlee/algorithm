import type { TreeNode } from '@algorithm/lib';

/**
 * 1325. Delete Leaves With a Given Value
 * https://leetcode.com/problems/delete-leaves-with-a-given-value
 */
export function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
  if (root === null) {
    return null;
  }
  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);
  if (root.left === null && root.right === null && root.val === target) {
    return null;
  }
  return root;
}
