import { Heap } from '@algorithm/lib';

/**
 * 2045. Second Minimum Time to Reach Destination
 * https://leetcode.com/problems/second-minimum-time-to-reach-destination
 */
export function secondMinimum(n: number, edges: number[][], time: number, change: number): number {
  const graph: number[][] = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const heap = new Heap<[number, number]>((a, b) => a[1] - b[1]);
  heap.push([1, 0]);

  const minTime = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  const visited = new Set();

  while (!heap.isEmpty) {
    const peek = heap.pop();
    if (peek === undefined) break;
    const [city, currentTime] = peek;
    if (city === n && minTime[city] < currentTime) {
      return currentTime;
    }

    if (minTime[city] === Number.MAX_SAFE_INTEGER) {
      minTime[city] = currentTime;
    } else if (minTime[city] !== currentTime && !visited.has(city)) {
      visited.add(city);
    } else {
      continue;
    }

    const factor = Math.floor(currentTime / change);
    const visitTime = (factor % 2 === 1 ? (factor + 1) * change : currentTime) + time;

    for (const nextCity of graph[city]) {
      if (!visited.has(nextCity)) {
        heap.push([nextCity, visitTime]);
      }
    }
  }

  return -1;
}
