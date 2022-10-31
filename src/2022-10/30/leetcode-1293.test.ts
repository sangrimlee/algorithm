import { shortestPath } from './leetcode-1293';

describe('2022-10-30: LeetCode 1293', () => {
  test('Example 1', () => {
    const grid = [
        [0, 0, 0],
        [1, 1, 0],
        [0, 0, 0],
        [0, 1, 1],
        [0, 0, 0],
      ],
      k = 1;
    expect(shortestPath(grid, k)).toBe(6);
  });

  test('Example 2', () => {
    const grid = [
        [0, 1, 1],
        [1, 1, 1],
        [1, 0, 0],
      ],
      k = 1;
    expect(shortestPath(grid, k)).toBe(-1);
  });

  test('Example 3', () => {
    const grid = [
        [0, 1, 1],
        [1, 1, 1],
        [1, 0, 0],
      ],
      k = 2;
    expect(shortestPath(grid, k)).toBe(4);
  });
});
