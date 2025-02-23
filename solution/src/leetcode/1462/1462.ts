/**
 * 1462. Course Schedule IV
 * https://leetcode.com/problems/course-schedule-iv
 */
export function checkIfPrerequisite(
  numCourses: number,
  prerequisites: number[][],
  queries: number[][],
): boolean[] {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const inDegrees: number[] = new Array<number>(numCourses).fill(0);
  for (const [a, b] of prerequisites) {
    inDegrees[b] += 1;
    graph[a].push(b);
  }

  let queue: number[] = [];
  inDegrees.forEach((inDegree, course) => {
    if (inDegree === 0) {
      queue.push(course);
    }
  });

  const isPrerequisites = Array.from({ length: numCourses }, () => new Set<number>());
  while (0 < queue.length) {
    const nextQueue: number[] = [];
    for (const node of queue) {
      for (const nextNode of graph[node]) {
        isPrerequisites[nextNode].add(node);
        for (const prereqNode of isPrerequisites[node]) {
          isPrerequisites[nextNode].add(prereqNode);
        }
        inDegrees[nextNode] -= 1;
        if (inDegrees[nextNode] === 0) {
          nextQueue.push(nextNode);
        }
      }
    }
    queue = nextQueue;
  }

  return queries.map(([u, v]) => isPrerequisites[v].has(u));
}
