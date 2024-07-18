import { TreeNode } from '@algorithm/lib';

/**
 * 1530. Number of Good Leaf Nodes Pairs
 * https://leetcode.com/problems/number-of-good-leaf-nodes-pairs
 */
export function countPairs(root: TreeNode | null, distance: number): number {
  let answer = 0;
  function dfs(node: TreeNode | null) {
    const result = new Array(distance + 1).fill(0);
    if (node === null) {
      return result;
    }
    if (node.left === null && node.right === null) {
      result[1] += 1;
      return result;
    }

    const leftDistances = dfs(node.left);
    const rightDistances = dfs(node.right);
    for (let left = 1; left <= distance; left++) {
      for (let right = distance - left; 0 <= right; right--) {
        answer += leftDistances[left] * rightDistances[right];
      }
    }
    for (let i = distance - 1; 1 <= i; i--) {
      result[i + 1] = leftDistances[i] + rightDistances[i];
    }
    return result;
  }
  dfs(root);
  return answer;
}
