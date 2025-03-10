import type { TreeNode } from '@algorithm/lib';

/**
 * 2415. Reverse Odd Levels of Binary Tree
 * https://leetcode.com/problems/reverse-odd-levels-of-binary-tree
 */
export function reverseOddLevels(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  function reverseLevels(nodes: TreeNode[]) {
    let [start, end] = [0, nodes.length - 1];
    while (start < end) {
      [nodes[start].val, nodes[end].val] = [nodes[end].val, nodes[start].val];
      start += 1;
      end -= 1;
    }
    return nodes;
  }

  let level = 0;
  let queue = [root];
  while (0 < queue.length) {
    const nextQueue = [];
    for (const node of queue) {
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right);
      }
    }
    level += 1;
    queue = level % 2 === 1 ? reverseLevels(nextQueue) : nextQueue;
  }
  return root;
}
