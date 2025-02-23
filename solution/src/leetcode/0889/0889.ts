import { TreeNode } from '@algorithm/lib';

/**
 * 889. Construct Binary Tree from Preorder and Postorder Traversal
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal
 */
export function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode {
  const n = preorder.length;
  const stack: TreeNode[] = [new TreeNode(preorder[0])];
  let postIndex = 0;
  for (let preIndex = 1; preIndex < n; preIndex++) {
    const value = preorder[preIndex];
    const node = new TreeNode(value);
    while (stack[stack.length - 1].val === postorder[postIndex]) {
      stack.pop();
      postIndex += 1;
    }
    const parentNode = stack[stack.length - 1];
    if (parentNode.left === null) {
      parentNode.left = node;
    } else {
      parentNode.right = node;
    }
    stack.push(node);
  }
  return stack[0];
}
