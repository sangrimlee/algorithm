import { TreeNode } from '@algorithm/lib';

/**
 * 103. Binary Tree Zigzag Level Order Traversal
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal
 */
export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const answer: number[][] = [];
  function levelorder(node: TreeNode, level: number) {
    if (answer.length <= level) {
      answer.push([]);
    }
    answer[level].push(node.val);
    node.left && levelorder(node.left, level + 1);
    node.right && levelorder(node.right, level + 1);
  }
  levelorder(root, 0);
  return answer.map((row, i) => (i % 2 === 0 ? row : row.reverse()));
}
