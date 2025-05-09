import { TreeNode } from '@algorithm/lib';

/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
 */
export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  function findIndex(arr: number[], value: number, startIndex: number, endIndex: number) {
    for (let i = startIndex; i < endIndex; i++) {
      if (arr[i] === value) {
        return i;
      }
    }
    return -1;
  }

  const stack = [...preorder].reverse();
  function buildNode(startIndex: number, endIndex: number): TreeNode | null {
    if (startIndex >= endIndex || stack.length === 0) {
      return null;
    }
    const rootValue = stack.pop();
    if (rootValue === undefined) {
      return null;
    }
    const rootIndex = findIndex(inorder, rootValue, startIndex, endIndex);
    return new TreeNode(
      rootValue,
      buildNode(startIndex, rootIndex),
      buildNode(rootIndex + 1, endIndex),
    );
  }
  return buildNode(0, inorder.length);
}
