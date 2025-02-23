import type { TreeNode } from '@algorithm/lib';

/**
 * 129. Sum Root to Leaf Numbers
 * https://leetcode.com/problems/sum-root-to-leaf-numbers
 */
export function sumNumbers(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  let answer = 0;
  function sumRootToLeaf(node: TreeNode, prev: number) {
    const current = prev * 10 + node.val;
    if (node.left === null && node.right === null) {
      answer += current;
      return;
    }
    if (node.left) {
      sumRootToLeaf(node.left, current);
    }
    if (node.right) {
      sumRootToLeaf(node.right, current);
    }
  }
  sumRootToLeaf(root, 0);
  return answer;
}
