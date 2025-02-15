import type { TreeNode } from '@algorithm/lib';

/**
 * 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal
 */
export function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  const answer: number[][] = [];
  let currentNodes: TreeNode[] = [root];
  while (0 < currentNodes.length) {
    const values: number[] = [];
    const nextNodes: TreeNode[] = [];
    for (const currentNode of currentNodes) {
      values.push(currentNode.val);
      if (currentNode.left) {
        nextNodes.push(currentNode.left);
      }
      if (currentNode.right) {
        nextNodes.push(currentNode.right);
      }
    }
    answer.push(values);
    currentNodes = nextNodes;
  }
  return answer;
}
