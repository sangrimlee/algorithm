import type { TreeNode } from '@algorithm/lib';

/**
 * 530. Minimum Absolute Difference in BST
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst
 */
export function getMinimumDifference(root: TreeNode | null): number {
  const nodes: number[] = [];

  const inorder = (node: TreeNode | null) => {
    if (node === null) {
      return;
    }
    inorder(node.left);
    nodes.push(node.val);
    inorder(node.right);
  };

  inorder(root);
  return nodes.reduce(
    (prev, curr, i) => (i === 0 ? prev : Math.min(prev, curr - nodes[i - 1])),
    Number.MAX_SAFE_INTEGER,
  );
}
