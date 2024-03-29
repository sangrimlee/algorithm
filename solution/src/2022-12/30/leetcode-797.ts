/**
 * 797. All Paths From Source to Target
 * https://leetcode.com/problems/all-paths-from-source-to-target
 */
export function allPathsSourceTarget(graph: number[][]): number[][] {
  const n = graph.length;
  const routes: number[][] = [];

  const dfs = (node: number, route: number[]) => {
    if (node === n - 1) {
      routes.push([...route]);
      return;
    }

    for (const nextNode of graph[node]) {
      route.push(nextNode);
      dfs(nextNode, route);
      route.pop();
    }
  };

  dfs(0, [0]);
  return routes;
}
