import { TreeNode } from '@algorithm/lib';

/**
 * 988. Smallest String Starting From Leaf
 * https://leetcode.com/problems/smallest-string-starting-from-leaf
 */
export function smallestFromLeaf(root: TreeNode | null): string {
  if (root === null) {
    return '';
  }

  let answer = '';
  function dfs(node: TreeNode, str: string) {
    const char = String.fromCharCode(node.val + 'a'.charCodeAt(0));
    if (node.left === null && node.right === null) {
      if (answer === '' || char + str < answer) {
        answer = char + str;
      }
      return;
    }
    if (node.left) {
      dfs(node.left, char + str);
    }
    if (node.right) {
      dfs(node.right, char + str);
    }
  }
  dfs(root, '');
  return answer;
}
