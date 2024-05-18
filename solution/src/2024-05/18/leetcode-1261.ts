import { TreeNode } from '@algorithm/lib';

/**
 * 1261. Find Elements in a Contaminated Binary Tree
 * https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree
 */
export class FindElements {
  private readonly values: Set<number>;

  constructor(root: TreeNode | null) {
    this.values = new Set();
    this.recover(root, 0);
  }

  private recover(node: TreeNode | null, value: number) {
    if (node === null) {
      return;
    }
    node.val = value;
    this.values.add(value);
    this.recover(node.left, 2 * value + 1);
    this.recover(node.right, 2 * value + 2);
  }

  find(target: number): boolean {
    return this.values.has(target);
  }
}
