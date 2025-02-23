import type { NArrayTreeNode as Node } from '@algorithm/lib';

/**
 * 589. N-ary Tree Preorder Traversal
 * https://leetcode.com/problems/n-ary-tree-preorder-traversal
 */
export function preorder(root: Node | null): number[] {
  if (!root) {
    return [];
  }
  const values: number[] = [];
  const traverse = (node: Node) => {
    values.push(node.val);
    node.children.forEach(traverse);
  };
  traverse(root);
  return values;
}
