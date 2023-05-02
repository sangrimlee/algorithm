import { TreeNode } from '@algorithm/lib';

/**
 * 199. Binary Tree Right Side View
 * https://leetcode.com/problems/binary-tree-right-side-view/
 */
export function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const answer: number[] = [];

  let currentNodes: TreeNode[] = [root];
  while (0 < currentNodes.length) {
    const nextNodes: TreeNode[] = [];
    currentNodes.forEach((currentNode) => {
      if (currentNode.left) {
        nextNodes.push(currentNode.left);
      }
      if (currentNode.right) {
        nextNodes.push(currentNode.right);
      }
    });
    answer.push(currentNodes[currentNodes.length - 1].val);
    currentNodes = nextNodes;
  }

  return answer;
}
