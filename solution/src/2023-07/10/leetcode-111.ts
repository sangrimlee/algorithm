import { TreeNode } from '@algorithm/lib';

/**
 * 111. Minimum Depth of Binary Tree
 * https://leetcode.com/problems/minimum-depth-of-binary-tree
 */
export function minDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const dfs = (node: TreeNode | null, depth: number): number => {
    if (node === null) {
      return Number.MAX_SAFE_INTEGER;
    }
    if (node.left === null && node.right === null) {
      return depth;
    }
    return Math.min(dfs(node.left, depth + 1), dfs(node.right, depth + 1));
  };
  return dfs(root, 1);
}
