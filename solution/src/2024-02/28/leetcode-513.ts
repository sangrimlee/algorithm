import { TreeNode } from '@algorithm/lib';

/**
 * 513. Find Bottom Left Tree Value
 * https://leetcode.com/problems/find-bottom-left-tree-value
 */
export function findBottomLeftValue(root: TreeNode | null): number {
  if (!root) {
    return -1;
  }

  let answer = root.val;
  const queue: TreeNode[] = [root];
  while (0 < queue.length) {
    const node = queue.shift()!;
    answer = node.val;
    if (node.right) {
      queue.push(node.right);
    }
    if (node.left) {
      queue.push(node.left);
    }
  }

  return answer;
}
