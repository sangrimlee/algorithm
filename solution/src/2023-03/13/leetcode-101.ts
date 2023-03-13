import { TreeNode } from '@1d1s/lib';

/**
 * 101. Symmetric Tree
 * https://leetcode.com/problems/symmetric-tree
 */
/* Recursive Solution */
export function isSymmetricRecursive(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  function recursive(leftNode: TreeNode | null, rightNode: TreeNode | null): boolean {
    if (leftNode === null || rightNode === null) {
      return leftNode === rightNode;
    }
    if (leftNode.val !== rightNode.val) {
      return false;
    }
    return recursive(leftNode.left, rightNode.right) && recursive(leftNode.right, rightNode.left);
  }

  return recursive(root.left, root.right);
}

/* Iterative Solution */
export function isSymmetricIterative(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  const queue = [[root.left, root.right]];

  while (queue.length) {
    const pair = queue.shift();
    if (pair) {
      const [leftNode, rightNode] = pair;
      if (leftNode === null && rightNode === null) {
        continue;
      }
      if (leftNode === null || rightNode === null) {
        return false;
      }
      if (leftNode.val === rightNode.val) {
        queue.push([leftNode.left, rightNode.right]);
        queue.push([leftNode.right, rightNode.left]);
      } else {
        return false;
      }
    }
  }
  return true;
}
