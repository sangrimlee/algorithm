/**
 * 207. Course Schedule
 * https://leetcode.com/problems/course-schedule
 */
export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const indegrees: number[] = new Array(numCourses).fill(0);
  const graph: number[][] = Array.from({ length: numCourses }).map(() => []);
  prerequisites.forEach(([a, b]) => {
    indegrees[a] += 1;
    graph[b].push(a);
  });

  const queue: number[] = [];
  indegrees.forEach((indegree, i) => {
    if (indegree === 0) {
      queue.push(i);
    }
  });

  let visited = 0;
  while (0 < queue.length) {
    const currentCourse = queue.shift();
    if (currentCourse === undefined) {
      continue;
    }
    visited += 1;
    for (const nextCourse of graph[currentCourse]) {
      indegrees[nextCourse] -= 1;
      if (indegrees[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }

  return visited === numCourses;
}
