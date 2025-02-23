import type { TreeNode } from '@algorithm/lib';

/**
 * 2458. Height of Binary Tree After Subtree Removal Queries
 * https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries
 */
export function treeQueries(root: TreeNode | null, queries: number[]): number[] {
  const results = new Map<number, number>();
  const heights = new Map<number, number>();

  function getHeight(node: TreeNode | null): number {
    if (node === null) {
      return -1;
    }
    if (heights.has(node.val)) {
      return heights.get(node.val) ?? 0;
    }
    const height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
    heights.set(node.val, height);
    return height;
  }

  function dfs(node: TreeNode | null, depth: number, maxValue: number): void {
    if (node === null) {
      return;
    }
    results.set(node.val, maxValue);
    dfs(node.left, depth + 1, Math.max(maxValue, depth + 1 + getHeight(node.right)));
    dfs(node.right, depth + 1, Math.max(maxValue, depth + 1 + getHeight(node.left)));
  }

  dfs(root, 0, 0);
  return queries.map((q) => results.get(q) ?? 0);
}
