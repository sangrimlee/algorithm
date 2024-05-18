import { TreeNode } from '@algorithm/lib';

/**
 * 979. Distribute Coins in Binary Tree
 * https://leetcode.com/problems/distribute-coins-in-binary-tree
 */
export function distributeCoins(root: TreeNode | null): number {
  let answer = 0;
  function traverse(node: TreeNode | null): number {
    if (node === null) {
      return 0;
    }
    const left = traverse(node.left);
    const right = traverse(node.right);
    answer += Math.abs(left) + Math.abs(right);
    return node.val + left + right - 1;
  }
  traverse(root);
  return answer;
}
