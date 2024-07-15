import { TreeNode } from '@algorithm/lib';

/**
 * 2196. Create Binary Tree From Descriptions
 * https://leetcode.com/problems/create-binary-tree-from-descriptions
 */
export function createBinaryTree(descriptions: number[][]): TreeNode | null {
  const nodes = new Map<number, TreeNode>();
  const hasParents = new Map<number, boolean>();

  for (const [parent, child, isLeft] of descriptions) {
    const parentNode = nodes.get(parent) ?? new TreeNode(parent);
    const childNode = nodes.get(child) ?? new TreeNode(child);
    nodes.set(parent, parentNode);
    nodes.set(child, childNode);
    hasParents.set(child, true);
    if (isLeft) {
      parentNode.left = childNode;
    } else {
      parentNode.right = childNode;
    }
  }

  for (const [parent] of descriptions) {
    if (!hasParents.get(parent)) {
      return nodes.get(parent)!;
    }
  }
  return null;
}
