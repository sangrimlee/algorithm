import { TreeNode } from '@algorithm/lib';

/**
 * 108. Convert Sorted Array to Binary Search Tree
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
 */
export function sortedArrayToBST(nums: number[]): TreeNode | null {
  const n = nums.length;
  if (n === 0) {
    return null;
  }

  const mid = Math.floor(n / 2);
  return new TreeNode(
    nums[mid],
    sortedArrayToBST(nums.slice(0, mid)),
    sortedArrayToBST(nums.slice(mid + 1)),
  );
}
