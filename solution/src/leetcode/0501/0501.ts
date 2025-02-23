import type { TreeNode } from '@algorithm/lib';

/**
 * 501. Find Mode in Binary Search Tree
 * https://leetcode.com/problems/find-mode-in-binary-search-tree
 */
export function findMode(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  let maxModeCount = 0;
  const modeCounter = new Map<number, number>();
  const dfs = (node: TreeNode) => {
    const modeCount = modeCounter.get(node.val) ?? 0;
    modeCounter.set(node.val, modeCount + 1);
    maxModeCount = Math.max(maxModeCount, modeCount + 1);
    if (node.left) {
      dfs(node.left);
    }
    if (node.right) {
      dfs(node.right);
    }
  };
  dfs(root);
  return [...modeCounter.keys()].filter((mode) => modeCounter.get(mode) === maxModeCount);
}
