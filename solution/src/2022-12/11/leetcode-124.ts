import { TreeNode } from '@algorithm/lib';

/**
 * 124. Binary Tree Maximum Path Sum
 * https://leetcode.com/problems/binary-tree-maximum-path-sum
 */
export function maxPathSum(root: TreeNode | null): number {
  let answer = Number.MIN_SAFE_INTEGER;

  function maxPathSumSubTree(node: TreeNode | null): number {
    if (node === null) {
      return 0;
    }

    const leftPathSum = Math.max(0, maxPathSumSubTree(node.left));
    const rightPathSum = Math.max(0, maxPathSumSubTree(node.right));

    answer = Math.max(answer, node.val + leftPathSum + rightPathSum);

    return node.val + Math.max(leftPathSum, rightPathSum);
  }
  maxPathSumSubTree(root);

  return answer;
}
