import type { TreeNode } from '@algorithm/lib';

/**
 * 2096. Step-By-Step Directions From a Binary Tree Node to Another
 * https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another
 */
export function getDirections(
  root: TreeNode | null,
  startValue: number,
  destValue: number,
): string {
  const lcaNode = getLCA(root, startValue, destValue);
  const startPath = getPath(lcaNode, startValue, []);
  const destPath = getPath(lcaNode, destValue, []);
  return 'U'.repeat(startPath.length) + destPath;
}

function getLCA(node: TreeNode | null, startValue: number, destValue: number): TreeNode | null {
  if (!node) {
    return null;
  }
  if (node.val === startValue || node.val === destValue) {
    return node;
  }
  const leftNode = getLCA(node.left, startValue, destValue);
  const rightNode = getLCA(node.right, startValue, destValue);
  if (leftNode && rightNode) {
    return node;
  }
  return leftNode ?? rightNode;
}

function getPath(node: TreeNode | null, value: number, paths: string[]): string {
  if (!node) {
    return '';
  }
  if (node.val === value) {
    return paths.join('');
  }

  paths.push('L');
  const leftPath = getPath(node.left, value, paths);
  if (leftPath !== '') {
    return leftPath;
  }
  paths.pop();

  paths.push('R');
  const rightPath = getPath(node.right, value, paths);
  if (rightPath !== '') {
    return rightPath;
  }
  paths.pop();
  return '';
}
