import { validPath } from './leetcode-1971';

describe('2022-12-19: LeetCode 1971', () => {
  test('Example 1', () => {
    const n = 3,
      edges = [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      source = 0,
      destination = 2;
    expect(validPath(n, edges, source, destination)).toBeTruthy();
  });

  test('Example 2', () => {
    const n = 6,
      edges = [
        [0, 1],
        [0, 2],
        [3, 5],
        [5, 4],
        [4, 3],
      ],
      source = 0,
      destination = 5;
    expect(validPath(n, edges, source, destination)).toBeFalsy();
  });
});
