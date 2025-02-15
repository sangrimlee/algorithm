import type { TreeNode } from '@algorithm/lib';

/**
 * 1315. Sum of Nodes with Even-Valued Grandparent
 * https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent
 */
export function sumEvenGrandparent(root: TreeNode | null): number {
  function traverse(node: TreeNode | null, grandparent?: number, parent?: number): number {
    if (node === null) {
      return 0;
    }
    const prevSum = traverse(node.left, parent, node.val) + traverse(node.right, parent, node.val);
    if (typeof grandparent !== 'number' || grandparent % 2 === 1) {
      return prevSum;
    }
    return prevSum + node.val;
  }

  return traverse(root);
}
