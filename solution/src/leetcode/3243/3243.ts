/**
 * 3243. Shortest Distance After Road Addition Queries I
 * https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i
 */
export function shortestDistanceAfterQueries(n: number, queries: number[][]): number[] {
  const answer: number[] = [];
  const graph: number[][] = Array.from({ length: n }, (_, i) => (i === 0 ? [] : [i - 1]));
  const dists: number[] = Array.from({ length: n }, (_, i) => i);

  for (const [u, v] of queries) {
    graph[v].push(u);
    for (let city = v; city < n; city++) {
      for (const prevCity of graph[city]) {
        dists[city] = Math.min(dists[city], dists[prevCity] + 1);
      }
    }
    answer.push(dists[n - 1]);
  }
  return answer;
}
