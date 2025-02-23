import { Graph } from './2642';

describe('LeetCode 2642', () => {
  test('Example 1', () => {
    const graph = new Graph(4, [
      [0, 2, 5],
      [0, 1, 2],
      [1, 2, 1],
      [3, 0, 3],
    ]);

    expect(graph.shortestPath(3, 2)).toBe(6);
    expect(graph.shortestPath(0, 3)).toBe(-1);
    graph.addEdge([1, 3, 4]);
    expect(graph.shortestPath(0, 3)).toBe(6);
  });
});
