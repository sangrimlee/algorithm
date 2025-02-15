import type { TreeNode } from '@algorithm/lib';

/**
 * 1161. Maximum Level Sum of a Binary Tree
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree
 */
export function maxLevelSum(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  let [maxValue, minLevel] = [root.val, 1];

  let currentLevel = 1;
  let currentNodes: TreeNode[] = [root];
  while (0 < currentNodes.length) {
    let totalValue = 0;
    const nextNodes: TreeNode[] = [];
    for (const currentNode of currentNodes) {
      totalValue += currentNode.val;
      if (currentNode.left) {
        nextNodes.push(currentNode.left);
      }
      if (currentNode.right) {
        nextNodes.push(currentNode.right);
      }
    }
    if (maxValue < totalValue) {
      [maxValue, minLevel] = [totalValue, currentLevel];
    }

    currentLevel += 1;
    currentNodes = nextNodes;
  }

  return minLevel;
}
