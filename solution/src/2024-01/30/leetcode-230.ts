import { TreeNode } from '@algorithm/lib';

/**
 * 230. Kth Smallest Element in a BST
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst
 */
export function kthSmallest(root: TreeNode | null, k: number): number {
  let count = 0;
  let answer = 0;
  function countNode(node: TreeNode | null, k: number) {
    if (node === null) {
      return;
    }
    countNode(node.left, k);
    count += 1;
    if (k === count) {
      answer = node.val;
    }
    countNode(node.right, k);
  }
  countNode(root, k);
  return answer;
}
