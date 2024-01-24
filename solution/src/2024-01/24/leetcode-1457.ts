import { TreeNode } from '@algorithm/lib';

/**
 * 1457. Pseudo-Palindromic Paths in a Binary Tree
 * https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree
 */
export function pseudoPalindromicPaths(root: TreeNode | null): number {
  function traverse(node: TreeNode | null, bit: number): number {
    if (node === null) {
      return 0;
    }
    const nextBit = bit ^ (1 << (node.val - 1));
    if (node.left === null && node.right === null) {
      return (nextBit & (nextBit - 1)) === 0 ? 1 : 0;
    }
    return traverse(node.left, nextBit) + traverse(node.right, nextBit);
  }
  return traverse(root, 0);
}
