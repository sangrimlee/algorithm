import type { TreeNode } from '@algorithm/lib';

/**
 * 2471. Minimum Number of Operations to Sort a Binary Tree by Level
 * https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level
 */
export function minimumOperations(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  let answer = 0;
  let queue: TreeNode[] = [root];
  while (0 < queue.length) {
    const nextQueue: TreeNode[] = [];
    const values: number[] = [];
    for (const node of queue) {
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right);
      }
      values.push(node.val);
    }
    answer += getMinSwap(values);
    queue = nextQueue;
  }
  return answer;
}

function getMinSwap(original: number[]) {
  const n = original.length;
  const indices = new Map(original.map((v, i) => [v, i]));
  const target = [...original].sort((a, b) => a - b);
  let swap = 0;
  for (let from = 0; from < n; from++) {
    if (original[from] === target[from]) {
      continue;
    }
    const to = indices.get(target[from]) ?? 0;
    indices.set(original[from], to);
    [original[from], original[to]] = [original[to], original[from]];
    swap += 1;
  }
  return swap;
}
