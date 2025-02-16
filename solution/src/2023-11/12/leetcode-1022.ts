import type { TreeNode } from '@algorithm/lib';

/**
 * 1022. Sum of Root To Leaf Binary Numbers
 * https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers
 */
export function sumRootToLeaf(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let answer = 0;
  const dfs = (node: TreeNode, prev = 0) => {
    const current = (prev << 1) + node.val;
    if (!node.left && !node.right) {
      answer += current;
      return;
    }
    if (node.left) {
      dfs(node.left, current);
    }
    if (node.right) {
      dfs(node.right, current);
    }
  };
  dfs(root);
  return answer;
}
