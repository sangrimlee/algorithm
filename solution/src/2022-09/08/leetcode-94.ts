import { TreeNode } from '@1d1s/lib';

/**
 * 94. Binary Tree Inorder Traversal
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 */
export function inorderTraversal(root: TreeNode | null): number[] {
  const answer: number[] = [];

  function inorder(node: TreeNode | null) {
    if (node === null) {
      return;
    }
    inorder(node.left);
    answer.push(node.val);
    inorder(node.right);
  }

  inorder(root);
  return answer;
}
