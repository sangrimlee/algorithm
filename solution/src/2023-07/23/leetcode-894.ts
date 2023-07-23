import { TreeNode } from '@algorithm/lib';

/**
 * 894. All Possible Full Binary Trees
 * https://leetcode.com/problems/all-possible-full-binary-trees
 */
export function allPossibleFBT(n: number): Array<TreeNode | null> {
  if (n % 2 === 0) {
    return [];
  }
  if (n === 1) {
    return [new TreeNode(0)];
  }

  const answer = new Array<TreeNode | null>();
  for (let i = 1; i < n; i += 2) {
    for (const leftNode of allPossibleFBT(i)) {
      for (const rightNode of allPossibleFBT(n - 1 - i)) {
        const rootNode = new TreeNode(0, leftNode, rightNode);
        answer.push(rootNode);
      }
    }
  }
  return answer;
}
