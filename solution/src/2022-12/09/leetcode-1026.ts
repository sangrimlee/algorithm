import type { TreeNode } from '@algorithm/lib';

/**
 * 1026. Maximum Difference Between Node and Ancestor
 * https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
 */
export function maxAncestorDiff(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  function findAncestorDiff(
    node: TreeNode | null,
    maxAncestor: number,
    minAncestor: number,
  ): number {
    if (node === null) {
      return 0;
    }

    const maxNextAncestor = Math.max(maxAncestor, node.val);
    const minNextAncestor = Math.min(minAncestor, node.val);
    const maxDiff = Math.max(Math.abs(maxAncestor - node.val), Math.abs(minAncestor - node.val));
    return Math.max(
      maxDiff,
      findAncestorDiff(node.left, maxNextAncestor, minNextAncestor),
      findAncestorDiff(node.right, maxNextAncestor, minNextAncestor),
    );
  }

  return findAncestorDiff(root, root.val, root.val);
}
