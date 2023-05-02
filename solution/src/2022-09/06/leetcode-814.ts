import { TreeNode } from '@algorithm/lib';

/**
 * 814. Binary Tree Pruning
 * https://leetcode.com/problems/binary-tree-pruning/
 */
export function pruneTree(root: TreeNode | null): TreeNode | null {
  function isContainOne(node: TreeNode | null): boolean {
    if (!node) {
      return false;
    }
    const isLeftContainOne = isContainOne(node.left);
    const isRightContainOne = isContainOne(node.right);
    if (!isLeftContainOne) {
      node.left = null;
    }
    if (!isRightContainOne) {
      node.right = null;
    }
    return node.val === 1 || isLeftContainOne || isRightContainOne;
  }
  return isContainOne(root) ? root : null;
}
