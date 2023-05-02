import { TreeNode } from '@algorithm/lib';

/**
 * 144. Binary Tree Preorder Traversal
 * https://leetcode.com/problems/binary-tree-preorder-traversal
 */
export function preorderTraversal(root: TreeNode | null): number[] {
  const answer: number[] = [];
  const stack = [root];

  while (0 < stack.length) {
    const currentNode = stack.pop();
    if (currentNode) {
      answer.push(currentNode.val);
      stack.push(currentNode.right);
      stack.push(currentNode.left);
    }
  }

  return answer;
}
