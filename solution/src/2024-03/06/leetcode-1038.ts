import { TreeNode } from '@algorithm/lib';

/**
 * 1038. Binary Search Tree to Greater Sum Tree
 * https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree
 */
export function bstToGst(root: TreeNode | null): TreeNode | null {
  function traverse(node: TreeNode | null, prevValue: number): number {
    if (node === null) {
      return 0;
    }
    let sumValue = node.val + traverse(node.right, prevValue);
    node.val = sumValue + prevValue;
    sumValue += traverse(node.left, node.val);
    return sumValue;
  }
  traverse(root, 0);
  return root;
}
