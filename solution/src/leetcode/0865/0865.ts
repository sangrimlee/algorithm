import type { TreeNode } from '@algorithm/lib';

/**
 * 865. Smallest Subtree with all the Deepest Nodes
 * https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes
 */
export function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
  function dfs(node: TreeNode | null): [TreeNode | null, number] {
    if (node === null) {
      return [null, 0];
    }
    const [leftNode, leftDepth] = dfs(node.left);
    const [rightNode, rightDepth] = dfs(node.right);
    if (leftDepth > rightDepth) {
      return [leftNode, leftDepth + 1];
    }
    if (leftDepth < rightDepth) {
      return [rightNode, rightDepth + 1];
    }
    return [node, leftDepth + 1];
  }
  return dfs(root)[0];
}
