import type { TreeNode } from '@algorithm/lib';

/**
 * 993. Cousins in Binary Tree
 * https://leetcode.com/problems/cousins-in-binary-tree
 */
export function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  if (!root) {
    return false;
  }

  const cousins = {
    [x]: { depth: -1, parent: -1 },
    [y]: { depth: -1, parent: -1 },
  };

  const dfs = (node: TreeNode, parentNode: TreeNode | null = null, depth = 0) => {
    if (node.val === x || node.val == y) {
      cousins[node.val] = { depth, parent: parentNode ? parentNode.val : -1 };
    }
    if (node.left) {
      dfs(node.left, node, depth + 1);
    }
    if (node.right) {
      dfs(node.right, node, depth + 1);
    }
  };
  dfs(root);

  return cousins[x].depth === cousins[y].depth && cousins[x].parent !== cousins[y].parent;
}
