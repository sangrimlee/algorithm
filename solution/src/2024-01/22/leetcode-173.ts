import { TreeNode } from '@algorithm/lib';

/**
 * 173. Binary Search Tree Iterator
 * https://leetcode.com/problems/binary-search-tree-iterator
 */
export class BSTIterator {
  private readonly parentNodes: TreeNode[];

  constructor(root: TreeNode | null) {
    this.parentNodes = [];
    this.skip(root);
  }

  next(): number | undefined {
    const node = this.parentNodes.pop();
    if (!node) return;
    this.skip(node.right);
    return node.val;
  }

  hasNext(): boolean {
    return 0 < this.parentNodes.length;
  }

  skip(node: TreeNode | null) {
    let currentNode = node;
    while (currentNode !== null) {
      this.parentNodes.push(currentNode);
      currentNode = currentNode.left;
    }
  }
}
