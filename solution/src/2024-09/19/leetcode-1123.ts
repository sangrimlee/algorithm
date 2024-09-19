import { TreeNode } from '@algorithm/lib';

/**
 * 1123. Lowest Common Ancestor of Deepest Leaves
 * https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves
 */
export function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
  let maxDepth = 0;
  let answer: TreeNode | null = null;
  function traverse(node: TreeNode | null, depth: number): number {
    maxDepth = Math.max(maxDepth, depth);
    if (node === null) {
      return depth;
    }
    const leftMaxDepth = traverse(node.left, depth + 1);
    const rightMaxDepth = traverse(node.right, depth + 1);
    if (leftMaxDepth === rightMaxDepth && rightMaxDepth === maxDepth) {
      answer = node;
    }
    return Math.max(leftMaxDepth, rightMaxDepth);
  }
  traverse(root, 0);
  return answer;
}
