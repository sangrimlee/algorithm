import { shortestPathLength } from './0847';

describe('LeetCode 0847', () => {
  test('Example 1', () => {
    expect(shortestPathLength([[1, 2, 3], [0], [0], [0]])).toBe(4);
  });

  test('Example 2', () => {
    expect(shortestPathLength([[1], [0, 2, 4], [1, 3, 4], [2], [1, 2]])).toBe(4);
  });

  test('Example 3', () => {
    expect(shortestPathLength([[]])).toBe(0);
  });
});
