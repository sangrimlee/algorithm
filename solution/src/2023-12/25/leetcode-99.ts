import { TreeNode } from '@algorithm/lib';

/**
 * 99. Recover Binary Search Tree
 * https://leetcode.com/problems/recover-binary-search-tree
 */
export function recoverTree(root: TreeNode | null): void {
  const MIN_VALUE = Number.MIN_SAFE_INTEGER;

  let firstNode = new TreeNode(MIN_VALUE);
  let secondNode = new TreeNode(MIN_VALUE);
  let prevNode = new TreeNode(MIN_VALUE);
  function inorder(node: TreeNode | null): void {
    if (node === null) {
      return;
    }
    inorder(node.left);
    if (node.val <= prevNode.val) {
      if (firstNode.val === MIN_VALUE) {
        firstNode = prevNode;
      }
      secondNode = node;
    }
    prevNode = node;
    inorder(node.right);
  }
  inorder(root);

  [firstNode.val, secondNode.val] = [secondNode.val, firstNode.val];
}
