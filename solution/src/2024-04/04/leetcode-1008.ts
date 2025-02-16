import { TreeNode } from '@algorithm/lib';

/**
 * 1008. Construct Binary Search Tree from Preorder Traversal
 * https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal
 */
export function bstFromPreorder(preorder: number[]): TreeNode | null {
  const stack = preorder.reverse();

  function build(bound: number): TreeNode | null {
    if (stack.length === 0 || bound < stack[stack.length - 1]) {
      return null;
    }
    const node = new TreeNode(stack.pop());
    node.left = build(node.val);
    node.right = build(bound);
    return node;
  }

  return build(Number.MAX_SAFE_INTEGER);
}
