import { TreeNode } from '@algorithm/lib';

/**
 * 106. Construct Binary Tree from Inorder and Postorder Traversal
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal
 */
export function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const stack = [...postorder];
  const indices = new Map(inorder.map((v, i) => [v, i]));
  function buildNode(start: number, end: number): TreeNode | null {
    if (start > end || stack.length === 0) {
      return null;
    }
    const value = stack.pop()!;
    const mid = indices.get(value)!;
    const node = new TreeNode(value);
    node.right = buildNode(mid + 1, end);
    node.left = buildNode(start, mid - 1);
    return node;
  }
  return buildNode(0, inorder.length - 1);
}
