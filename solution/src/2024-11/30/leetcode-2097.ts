/**
 * 2097. Valid Arrangement of Pairs
 * https://leetcode.com/problems/valid-arrangement-of-pairs
 */
export function validArrangement(pairs: number[][]): number[][] {
  const graph = new Map<number, number[]>();
  const degrees = new Map<number, number>();
  for (const [start, end] of pairs) {
    if (graph.has(start)) {
      graph.get(start)?.push(end);
    } else {
      graph.set(start, [end]);
    }
    degrees.set(start, (degrees.get(start) ?? 0) + 1);
    degrees.set(end, (degrees.get(end) ?? 0) - 1);
  }

  let start = pairs[0][0];
  for (const [node, degree] of degrees) {
    if (degree === 1) {
      start = node;
    }
  }

  const routes: number[] = [];
  const stack: number[] = [start];
  while (0 < stack.length) {
    let node = stack[stack.length - 1];
    let nextNodes = graph.get(node) ?? [];
    while (0 < nextNodes.length) {
      stack.push(nextNodes.pop() ?? 0);
      node = stack[stack.length - 1];
      nextNodes = graph.get(node) ?? [];
    }
    routes.push(stack.pop() ?? 0);
  }

  const answer: number[][] = [];
  for (let i = routes.length - 1; 0 < i; i--) {
    answer.push([routes[i], routes[i - 1]]);
  }
  return answer;
}
