import { TreeNode } from '@algorithm/lib';

/**
 * 889. Construct Binary Tree from Preorder and Postorder Traversal
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal
 */
export function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode {
  const rootNode = new TreeNode(preorder[0]);
  const stack: TreeNode[] = [rootNode];

  let postIndex = 0;
  for (let preIndex = 1; preIndex < preorder.length; preIndex++) {
    const node = new TreeNode(preorder[preIndex]);
    while (stack.length > 0 && stack[stack.length - 1].val === postorder[postIndex]) {
      stack.pop();
      postIndex += 1;
    }

    const parentNode = stack[stack.length - 1];
    if (!parentNode.left) {
      parentNode.left = node;
    } else {
      parentNode.right = node;
    }
    stack.push(node);
  }
  return rootNode;
}
