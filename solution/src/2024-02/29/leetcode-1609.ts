import type { TreeNode } from '@algorithm/lib';

/**
 * 1609. Even Odd Tree
 * https://leetcode.com/problems/even-odd-tree
 */
export function isEvenOddTree(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  let nodes = [root];
  let level = 0;
  while (0 < nodes.length) {
    const nextNodes: TreeNode[] = [];

    let prevValue = Number.MIN_SAFE_INTEGER;
    for (const node of nodes) {
      const currentValue = level % 2 === 0 ? node.val : -node.val;
      if (level % 2 === node.val % 2 || prevValue >= currentValue) {
        return false;
      }
      prevValue = currentValue;
      if (node.left) {
        nextNodes.push(node.left);
      }
      if (node.right) {
        nextNodes.push(node.right);
      }
    }
    nodes = nextNodes;
    level += 1;
  }

  return true;
}
