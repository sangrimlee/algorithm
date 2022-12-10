import { TreeNode } from '@1d1s/lib';

/**
 * 1339. Maximum Product of Splitted Binary Tree
 * https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/
 */
export function maxProduct(root: TreeNode | null): number {
  const MOD = 10 ** 9 + 7;
  if (root === null) {
    return 0;
  }

  let answer = 0;
  const totalValue = getTotalValue(root);

  function findMaxProduct(root: TreeNode | null): number {
    if (root === null) {
      return 0;
    }

    const leftTotalValue = findMaxProduct(root.left);
    const rightTotalValue = findMaxProduct(root.right);
    answer = Math.max(
      answer,
      (totalValue - leftTotalValue) * leftTotalValue,
      (totalValue - rightTotalValue) * rightTotalValue,
    );
    return root.val + leftTotalValue + rightTotalValue;
  }
  findMaxProduct(root);

  return answer % MOD;
}

function getTotalValue(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  return root.val + getTotalValue(root.left) + getTotalValue(root.right);
}
