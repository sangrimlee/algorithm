import type { TreeNode } from '@algorithm/lib';

/**
 * 2583. Kth Largest Sum in a Binary Tree
 * https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree
 */
export function kthLargestLevelSum(root: TreeNode | null, k: number): number {
  if (root === null) {
    return -1;
  }

  const sums = [];
  let queue = [root];
  while (0 < queue.length) {
    let sum = 0;
    const nextQueue = [];
    for (const node of queue) {
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right);
      }
      sum += node.val;
    }
    sums.push(sum);
    queue = nextQueue;
  }

  if (sums.length < k) {
    return -1;
  }
  sums.sort((a, b) => b - a);
  return sums[k - 1];
}
