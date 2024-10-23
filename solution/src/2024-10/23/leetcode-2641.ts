import { TreeNode } from '@algorithm/lib';

/**
 * 2641. Cousins in Binary Tree II
 * https://leetcode.com/problems/cousins-in-binary-tree-ii
 */
export function replaceValueInTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }
  const queue = [root];
  let prevLevelSum = root.val;

  while (0 < queue.length) {
    const levelSize = queue.length;
    let currLevelSum = 0;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      node.val = prevLevelSum - node.val;
      const siblingSum = (node.left?.val ?? 0) + (node.right?.val ?? 0);
      if (node.left) {
        currLevelSum += node.left.val;
        node.left.val = siblingSum;
        queue.push(node.left);
      }
      if (node.right) {
        currLevelSum += node.right.val;
        node.right.val = siblingSum;
        queue.push(node.right);
      }
    }
    prevLevelSum = currLevelSum;
  }

  return root;
}
