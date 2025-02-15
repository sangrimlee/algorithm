import { Heap } from '@algorithm/lib';

/**
 * 2050. Parallel Courses III
 * https://leetcode.com/problems/parallel-courses-iii
 */
export function minimumTime(n: number, relations: number[][], time: number[]): number {
  const indegrees: number[] = new Array<number>(n).fill(0);
  const graph: number[][] = Array.from({ length: n }).map(() => []);
  for (const [prevCourse, nextCourse] of relations) {
    indegrees[nextCourse - 1] += 1;
    graph[prevCourse - 1].push(nextCourse - 1);
  }

  const heap = new Heap<number[]>(([a], [b]) => a - b);
  for (let course = 0; course < n; course++) {
    if (indegrees[course] === 0) {
      heap.push([time[course], course]);
    }
  }

  let currentTime = 0;
  while (!heap.isEmpty) {
    const peek = heap.pop();
    if (!peek) continue;
    const [endTime, course] = peek;
    for (const nextCourse of graph[course]) {
      indegrees[nextCourse] -= 1;
      if (indegrees[nextCourse] === 0) {
        heap.push([endTime + time[nextCourse], nextCourse]);
      }
    }
    currentTime = endTime;
  }

  return currentTime;
}
