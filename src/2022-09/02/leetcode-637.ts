export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * 637. Average of Levels in Binary Tree
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/
 */
export function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const answer: number[] = [];
  let currentNodes = [root];

  while (0 < currentNodes.length) {
    let totalValue = 0;
    const totalLength = currentNodes.length;
    const nextNodes: TreeNode[] = [];

    currentNodes.forEach((currentNode) => {
      if (currentNode.left) {
        nextNodes.push(currentNode.left);
      }
      if (currentNode.right) {
        nextNodes.push(currentNode.right);
      }
      totalValue += currentNode.val;
    });

    answer.push(totalValue / totalLength);
    currentNodes = nextNodes;
  }

  return answer;
}
