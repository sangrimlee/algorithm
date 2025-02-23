import type { TreeNode } from '@algorithm/lib';

/**
 * 257. Binary Tree Paths
 * https://leetcode.com/problems/binary-tree-paths
 */
export function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) {
    return [];
  }

  const answer: string[] = [];
  function dfs(node: TreeNode, paths: number[]) {
    if (!node.left && !node.right) {
      answer.push(paths.join('->'));
      return;
    }
    if (node.left) {
      paths.push(node.left.val);
      dfs(node.left, paths);
      paths.pop();
    }
    if (node.right) {
      paths.push(node.right.val);
      dfs(node.right, paths);
      paths.pop();
    }
  }
  dfs(root, [root.val]);

  return answer;
}
