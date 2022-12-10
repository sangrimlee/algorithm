import { range } from '@1d1s/lib';
import { TreeNode } from '@1d1s/lib';

/**
 * 872. Leaf-Similar Trees
 * https://leetcode.com/problems/leaf-similar-trees/
 */
export function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const leafNodes1 = getLeafNodes(root1);
  const leafNodes2 = getLeafNodes(root2);

  if (leafNodes1.length !== leafNodes2.length) {
    return false;
  }

  for (const i of range(leafNodes1.length)) {
    if (leafNodes1[i] !== leafNodes2[i]) {
      return false;
    }
  }

  return true;
}

function getLeafNodes(node: TreeNode | null): number[] {
  if (node === null) {
    return [];
  }

  if (node.left === null && node.right === null) {
    return [node.val];
  }

  return [...getLeafNodes(node.left), ...getLeafNodes(node.right)];
}
