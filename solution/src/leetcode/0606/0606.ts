import type { TreeNode } from '@algorithm/lib';

/**
 * 606. Construct String from Binary Tree
 * https://leetcode.com/problems/construct-string-from-binary-tree/
 */
export function tree2str(root: TreeNode | null): string {
  if (root === null) {
    return '';
  }
  if (root.left === null && root.right === null) {
    return root.val.toString();
  }
  if (root.right === null) {
    return `${root.val.toString()}(${tree2str(root.left)})`;
  }
  return `${root.val.toString()}(${tree2str(root.left)})(${tree2str(root.right)})`;
}
