import { TreeNode } from '@algorithm/lib';

/**
 * 671. Second Minimum Node In a Binary Tree
 * https://leetcode.com/problems/second-minimum-node-in-a-binary-tree
 */
export function findSecondMinimumValue(root: TreeNode | null): number {
  if (!root) {
    return -1;
  }
  // RootNode의 값이 모든 값 중 제일 작은 값
  const minValue = root.val;
  let secondMinValue = Number.MAX_SAFE_INTEGER;
  const dfs = (node: TreeNode | null) => {
    if (!node) {
      return;
    }
    if (minValue < node.val && node.val < secondMinValue) {
      secondMinValue = node.val;
      return;
    }
    if (node.val === minValue) {
      dfs(node.left);
      dfs(node.right);
    }
  };

  dfs(root);
  return secondMinValue === Number.MAX_SAFE_INTEGER ? -1 : secondMinValue;
}
