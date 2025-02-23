import type { TreeNode } from '@algorithm/lib';

/**
 * 515. Find Largest Value in Each Tree Row
 * https://leetcode.com/problems/find-largest-value-in-each-tree-row
 */
export function largestValues(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const answer: number[] = [];
  const find = (node: TreeNode, depth: number) => {
    answer[depth] = Math.max(answer[depth] ?? Number.MIN_SAFE_INTEGER, node.val);
    if (node.left) {
      find(node.left, depth + 1);
    }
    if (node.right) {
      find(node.right, depth + 1);
    }
  };
  find(root, 0);
  return answer;
}
