/**
 * 1557. Minimum Number of Vertices to Reach All Nodes
 * https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes
 */
export function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  const indegrees = new Array(n).fill(0);

  for (const [, to] of edges) {
    indegrees[to] += 1;
  }

  const answer: number[] = [];
  indegrees.forEach((indegree, i) => {
    if (indegree === 0) {
      answer.push(i);
    }
  });

  return answer;
}
