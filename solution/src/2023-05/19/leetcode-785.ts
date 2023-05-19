/**
 * 785. Is Graph Bipartite?
 * https://leetcode.com/problems/is-graph-bipartite
 */
export function isBipartite(graph: number[][]): boolean {
  const n = graph.length;
  const colors = new Array(n).fill(-1);

  const dfs = (color: number, index: number): boolean => {
    if (colors[index] !== -1) {
      return color === colors[index];
    }
    colors[index] = color;
    return graph[index].every((nextIndex) => dfs(color ^ 1, nextIndex));
  };

  return new Array(n)
    .fill(undefined)
    .map((_, i) => i)
    .every((index) => colors[index] !== -1 || dfs(0, index));
}
