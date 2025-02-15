import type { TreeNode } from '@algorithm/lib';

/**
 * 2265. Count Nodes Equal to Average of Subtree
 * https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree
 */
export function averageOfSubtree(root: TreeNode | null): number {
  let answer = 0;
  function traverse(node: TreeNode | null): [number, number] {
    if (!node) {
      return [0, 0];
    }
    const [leftNodeCnt, leftNodeSum] = traverse(node.left);
    const [rightNodeCnt, rightNodeSum] = traverse(node.right);
    const nodeCnt = leftNodeCnt + rightNodeCnt + 1;
    const nodeSum = leftNodeSum + rightNodeSum + node.val;
    const average = Math.floor(nodeSum / nodeCnt);
    if (average === node.val) {
      answer += 1;
    }
    return [nodeCnt, nodeSum];
  }
  traverse(root);
  return answer;
}
