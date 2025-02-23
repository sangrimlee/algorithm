import type { NArrayTreeNode as Node } from '@algorithm/lib';

/**
 * 590. N-ary Tree Postorder Traversal
 * https://leetcode.com/problems/n-ary-tree-postorder-traversal
 */
export function postorder(root: Node | null): number[] {
  if (!root) {
    return [];
  }
  const values: number[] = [];
  const traverse = (node: Node) => {
    node.children.forEach(traverse);
    values.push(node.val);
  };
  traverse(root);
  return values;
}
