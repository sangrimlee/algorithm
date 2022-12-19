/**
 * 1971. Find if Path Exists in Graph
 * https://leetcode.com/problems/find-if-path-exists-in-graph
 */
export function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number,
): boolean {
  const graph: number[][] = new Array(n).fill(undefined).map(() => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const queue = [source];
  const visited = new Array<boolean>(n).fill(false);
  visited[source] = true;

  while (0 < queue.length) {
    const currentVertex = queue.shift();
    if (currentVertex === undefined) {
      break;
    }
    for (const nextVertex of graph[currentVertex]) {
      if (!visited[nextVertex]) {
        queue.push(nextVertex);
        visited[nextVertex] = true;
      }
    }
  }

  return visited[destination];
}
