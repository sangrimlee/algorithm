import { TreeNode } from '@algorithm/lib';

/**
 * 1448. Count Good Nodes in Binary Tree
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree
 */
export function goodNodes(root: TreeNode | null): number {
  let answer = 0;
  function traverse(node: TreeNode | null, maxValue: number) {
    if (node === null) return;
    if (maxValue <= node.val) {
      answer += 1;
    }
    traverse(node.left, Math.max(maxValue, node.val));
    traverse(node.right, Math.max(maxValue, node.val));
  }
  traverse(root, Number.MIN_SAFE_INTEGER);
  return answer;
}
