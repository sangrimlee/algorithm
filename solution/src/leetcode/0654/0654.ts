import { TreeNode } from '@algorithm/lib';

/**
 * 654. Maximum Binary Tree
 * https://leetcode.com/problems/maximum-binary-tree
 */
export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  const stack: TreeNode[] = [];
  nums.forEach((num) => {
    const node = new TreeNode(num);
    while (0 < stack.length && stack[stack.length - 1].val < num) {
      node.left = stack[stack.length - 1];
      stack.pop();
    }
    if (0 < stack.length) {
      stack[stack.length - 1].right = node;
    }
    stack.push(node);
  });
  return stack[0];
}
