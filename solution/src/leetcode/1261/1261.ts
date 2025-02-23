import type { TreeNode } from '@algorithm/lib';

/**
 * 1261. Find Elements in a Contaminated Binary Tree
 * https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree
 */
export class FindElements {
  private readonly recoveredValues: Set<number>;

  constructor(root: TreeNode | null) {
    this.recoveredValues = new Set();
    this.recoverTree(root, 0);
  }

  private recoverTree(node: TreeNode | null, val: number) {
    if (node === null) {
      return;
    }
    node.val = val;
    this.recoveredValues.add(val);
    this.recoverTree(node.left, 2 * val + 1);
    this.recoverTree(node.right, 2 * val + 2);
  }

  find(target: number): boolean {
    return this.recoveredValues.has(target);
  }
}
