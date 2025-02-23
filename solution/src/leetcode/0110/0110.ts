import type { TreeNode } from '@algorithm/lib';

/**
 * 110. Balanced Binary Tree
 * https://leetcode.com/problems/balanced-binary-tree
 */
export function isBalanced(root: TreeNode | null): boolean {
  /**
   * 해당 노드의 높이를 반환
   * 만약, 자식 노드의 높이 차이가 1이상인 경우 -1을 반환
   */
  function getHeight(node: TreeNode | null): number {
    if (node === null) {
      return 0;
    }
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  }

  return getHeight(root) !== -1;
}
