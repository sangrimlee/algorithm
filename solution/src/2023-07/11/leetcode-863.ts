import { TreeNode } from '@algorithm/lib';

/**
 * 863. All Nodes Distance K in Binary Tree
 * https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree
 */
export function distanceK(
  rootNode: TreeNode | null,
  targetNode: TreeNode | null,
  k: number,
): number[] {
  if (rootNode === null || targetNode === null) {
    return [];
  }

  const graph = new Map<number, number[]>();
  const connectNode = (node1: TreeNode, node2: TreeNode) => {
    const connected = graph.get(node1.val);
    if (connected) {
      connected.push(node2.val);
    } else {
      graph.set(node1.val, [node2.val]);
    }
  };
  const buildGraph = (parentNode: TreeNode | null, currentNode: TreeNode | null) => {
    if (currentNode === null) {
      return;
    }
    if (parentNode !== null) {
      connectNode(parentNode, currentNode);
      connectNode(currentNode, parentNode);
    }
    buildGraph(currentNode, currentNode.left);
    buildGraph(currentNode, currentNode.right);
  };
  buildGraph(null, rootNode);

  const answer: number[] = [];
  const visited = new Set([targetNode.val]);

  const dfs = (current: number, distance: number) => {
    if (distance === k) {
      answer.push(current);
      return;
    }
    for (const neighbor of graph.get(current) || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        dfs(neighbor, distance + 1);
      }
    }
  };
  dfs(targetNode.val, 0);

  return answer;
}
