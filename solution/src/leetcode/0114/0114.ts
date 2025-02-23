import type { TreeNode } from '@algorithm/lib';

/**
 * 114. Flatten Binary Tree to Linked List
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list
 */
export function flatten(root: TreeNode | null): void {
  let lastNode: TreeNode | null = null;
  function traverse(node: TreeNode | null) {
    if (node === null) {
      return null;
    }
    traverse(node.right);
    traverse(node.left);
    node.right = lastNode;
    node.left = null;
    lastNode = node;
  }
  traverse(root);
}
