import { TreeNode } from '@algorithm/lib';

/**
 * 623. Add One Row to Tree
 * https://leetcode.com/problems/add-one-row-to-tree
 */
export function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
  if (depth === 1) {
    return new TreeNode(val, root);
  }

  function dfs(node: TreeNode | null, nodeDepth: number) {
    if (node === null) {
      return;
    }
    if (nodeDepth < depth - 1) {
      dfs(node.left, nodeDepth + 1);
      dfs(node.right, nodeDepth + 1);
    } else {
      const leftNode = node.left;
      node.left = new TreeNode(val);
      node.left.left = leftNode;

      const rightNode = node.right;
      node.right = new TreeNode(val);
      node.right.right = rightNode;
    }
  }

  dfs(root, 1);
  return root;
}
