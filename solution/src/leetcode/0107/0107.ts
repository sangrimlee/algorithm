import type { TreeNode } from '@algorithm/lib';

/**
 * 107. Binary Tree Level Order Traversal II
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii
 */
export function levelOrderBottom(root: TreeNode | null): number[][] {
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
  return answer.reverse();
}
