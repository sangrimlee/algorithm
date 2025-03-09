/**
 * 2467. Most Profitable Path in a Tree
 * https://leetcode.com/problems/most-profitable-path-in-a-tree/
 */
export function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
  const n = amount.length;
  const distances = new Array<number>(n).fill(n);
  distances[bob] = 0;

  const tree: number[][] = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    tree[a].push(b);
    tree[b].push(a);
  }

  function dfs(node: number, parentNode: number, time: number): number {
    let currentIncome = 0;
    let maxSubtreeIncome = Number.MIN_SAFE_INTEGER;
    for (const childNode of tree[node]) {
      if (childNode === parentNode) {
        continue;
      }
      maxSubtreeIncome = Math.max(maxSubtreeIncome, dfs(childNode, node, time + 1));
      distances[node] = Math.min(distances[node], distances[childNode] + 1);
    }

    if (distances[node] > time) {
      currentIncome += amount[node];
    } else if (distances[node] === time) {
      currentIncome += Math.floor(amount[node] / 2);
    }
    // 리프 노드인 경우
    if (maxSubtreeIncome === Number.MIN_SAFE_INTEGER) {
      return currentIncome;
    }
    return currentIncome + maxSubtreeIncome;
  }
  return dfs(0, 0, 0);
}
