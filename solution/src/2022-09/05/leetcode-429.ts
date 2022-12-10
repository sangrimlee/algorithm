import { NArrayTreeNode } from '@1d1s/lib';

/**
 * 429. N-ary Tree Level Order Traversal
 * https://leetcode.com/problems/n-ary-tree-level-order-traversal/
 */
export function levelOrder(root: NArrayTreeNode | null): number[][] {
  if (root === null) {
    return [];
  }

  const answer: number[][] = [];
  let currentNodes = [root];
  while (0 < currentNodes.length) {
    answer.push(currentNodes.map((currentNode) => currentNode.val));
    currentNodes = currentNodes.flatMap((currentNode) => currentNode.children);
  }
  return answer;
}
