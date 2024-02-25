import { TreeNode } from '@algorithm/lib';

/**
 * 2331. Evaluate Boolean Binary Tree
 * https://leetcode.com/problems/evaluate-boolean-binary-tree
 */
export function evaluateTree(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  if (root.left === null || root.right === null) {
    return root.val === 1;
  }

  if (root.val === 2) {
    return evaluateTree(root.left) || evaluateTree(root.right);
  }

  return evaluateTree(root.left) && evaluateTree(root.right);
}
