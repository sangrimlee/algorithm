/**
 * 2872. Maximum Number of K-Divisible Components
 * https://leetcode.com/problems/maximum-number-of-k-divisible-components
 */
export function maxKDivisibleComponents(
  n: number,
  edges: number[][],
  values: number[],
  k: number,
): number {
  const graph: number[][] = Array.from({ length: n }, () => []);
  edges.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  let answer = 0;
  function dfs(parentNode: number, node: number): number {
    let result = values[node];
    for (const childNode of graph[node]) {
      if (parentNode !== childNode) {
        result += dfs(node, childNode);
      }
    }
    if (result % k === 0) {
      answer += 1;
      return 0;
    }
    return result;
  }
  dfs(-1, 0);
  return answer;
}
