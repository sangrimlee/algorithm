import type { TreeNode } from '@algorithm/lib';

/**
 * 100. Same Tree
 * https://leetcode.com/problems/same-tree
 */
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
