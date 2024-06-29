/**
 * 2192. All Ancestors of a Node in a Directed Acyclic Graph
 * https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph
 */
export function getAncestors(n: number, edges: number[][]): number[][] {
  const answer: number[][] = Array.from({ length: n }, () => []);
  const children: number[][] = Array.from({ length: n }, () => []);
  for (const [from, to] of edges) {
    children[from].push(to);
  }

  function dfs(parentNode: number, currentNode: number) {
    for (const childNode of children[currentNode]) {
      if (answer[childNode].at(-1) === parentNode) {
        continue;
      }
      answer[childNode].push(parentNode);
      dfs(parentNode, childNode);
    }
  }

  for (let node = 0; node < n; node++) {
    dfs(node, node);
  }

  return answer;
}
