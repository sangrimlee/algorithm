import { Heap } from '@algorithm/lib';

/**
 * 1976. Number of Ways to Arrive at Destination
 * https://leetcode.com/problems/number-of-ways-to-arrive-at-destination
 */
export function countPaths(n: number, roads: number[][]): number {
  const MOD = 10 ** 9 + 7;
  const graph: [number, number][][] = Array.from({ length: n }, () => []);
  for (const [u, v, time] of roads) {
    graph[u].push([v, time]);
    graph[v].push([u, time]);
  }

  const heap = new Heap<[number, number]>((a, b) => a[0] - b[0]);
  heap.push([0, 0]);
  const minTimes = new Array<number>(n).fill(Number.MAX_SAFE_INTEGER);
  minTimes[0] = 0;
  const pathCounts = new Array<number>(n).fill(0);
  pathCounts[0] = 1;

  while (!heap.isEmpty) {
    const peek = heap.pop();
    if (peek === undefined) {
      break;
    }

    const [currentTime, currentNode] = peek;
    if (currentTime > minTimes[currentNode]) {
      continue;
    }

    for (const [nextNode, time] of graph[currentNode]) {
      const nextTime = currentTime + time;
      if (nextTime < minTimes[nextNode]) {
        minTimes[nextNode] = nextTime;
        pathCounts[nextNode] = pathCounts[currentNode];
        heap.push([nextTime, nextNode]);
      } else if (nextTime === minTimes[nextNode]) {
        pathCounts[nextNode] = (pathCounts[nextNode] + pathCounts[currentNode]) % MOD;
      }
    }
  }
  return pathCounts[n - 1];
}
