import { TreeNode } from '@algorithm/lib';

/**
 * 563. Binary Tree Tilt
 * https://leetcode.com/problems/binary-tree-tilt
 */
export function findTilt(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const dfs = (node: TreeNode | null): [number, number] => {
    if (!node) {
      return [0, 0];
    }
    const [leftSum, leftTilt] = dfs(node.left);
    const [rightSum, rightTilt] = dfs(node.right);
    return [leftSum + rightSum + node.val, leftTilt + rightTilt + Math.abs(leftSum - rightSum)];
  };

  return dfs(root)[1];
}
