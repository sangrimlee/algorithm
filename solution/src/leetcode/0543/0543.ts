import type { TreeNode } from '@algorithm/lib';

/**
 * 543. Diameter of Binary Tree
 * https://leetcode.com/problems/diameter-of-binary-tree
 */
export function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  function maxHeightAndDiameter(node: TreeNode | null): [number, number] {
    if (!node) {
      return [0, 0];
    }
    const [leftMaxHeight, leftMaxDiameter] = maxHeightAndDiameter(node.left);
    const [rightMaxHeight, rightMaxDiameter] = maxHeightAndDiameter(node.right);

    return [
      Math.max(leftMaxHeight, rightMaxHeight) + 1,
      Math.max(leftMaxDiameter, rightMaxDiameter, leftMaxHeight + rightMaxHeight),
    ];
  }

  return maxHeightAndDiameter(root)[1];
}
