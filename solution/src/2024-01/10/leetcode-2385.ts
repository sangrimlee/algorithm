import type { TreeNode } from '@algorithm/lib';

/**
 * 2385. Amount of Time for Binary Tree to Be Infected
 * https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected
 */
export function amountOfTime(root: TreeNode | null, start: number): number {
  if (root === null) {
    return 0;
  }
  const graph = new Map<number, number[]>();
  const stack: [TreeNode, number][] = [[root, -1]];
  while (0 < stack.length) {
    const last = stack.pop();
    if (last === undefined) {
      break;
    }
    const [node, parentNode] = last;
    const childNodes = parentNode !== -1 ? [parentNode] : [];
    if (node.left) {
      childNodes.push(node.left.val);
      stack.push([node.left, node.val]);
    }
    if (node.right) {
      childNodes.push(node.right.val);
      stack.push([node.right, node.val]);
    }
    graph.set(node.val, childNodes);
  }

  let answer = -1;
  let queue = [start];
  const visited = new Set<number>([start]);
  while (0 < queue.length) {
    const nextQueue = [];
    for (const node of queue) {
      for (const nextNode of graph.get(node) ?? []) {
        if (!visited.has(nextNode)) {
          visited.add(nextNode);
          nextQueue.push(nextNode);
        }
      }
    }
    queue = nextQueue;
    answer += 1;
  }
  return answer;
}
