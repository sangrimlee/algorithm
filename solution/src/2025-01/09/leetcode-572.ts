import type { TreeNode } from '@algorithm/lib';

/**
 * 572. Subtree of Another Tree
 * https://leetcode.com/problems/subtree-of-another-tree
 */
export function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null) {
    return false;
  }
  return (
    isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
  );
}

function isSameTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null || subRoot === null) {
    return root === subRoot;
  }
  return (
    root.val === subRoot.val &&
    isSameTree(root.left, subRoot.left) &&
    isSameTree(root.right, subRoot.right)
  );
}
