import type { TreeNode } from '@algorithm/lib';

/**
 * 113. Path Sum II
 * https://leetcode.com/problems/path-sum-ii/
 */
export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (root === null) {
    return [];
  }

  const answer: number[][] = [];
  const currentValues = [root.val];

  function dfs(node: TreeNode | null, totalValue: number) {
    if (node === null) {
      return;
    }
    if (node.left === null && node.right === null) {
      if (totalValue === targetSum) {
        answer.push([...currentValues]);
      }
      return;
    }
    if (node.left) {
      const leftValue = node.left.val;
      currentValues.push(leftValue);
      dfs(node.left, totalValue + leftValue);
      currentValues.pop();
    }
    if (node.right) {
      const rightValue = node.right.val;
      currentValues.push(rightValue);
      dfs(node.right, totalValue + rightValue);
      currentValues.pop();
    }
    return;
  }

  dfs(root, root.val);

  return answer;
}
