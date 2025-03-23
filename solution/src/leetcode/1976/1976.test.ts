import { countPaths } from './1976';

describe('LeetCode 1976', () => {
  test('Example 1', () => {
    expect(
      countPaths(7, [
        [0, 6, 7],
        [0, 1, 2],
        [1, 2, 3],
        [1, 3, 3],
        [6, 3, 3],
        [3, 5, 1],
        [6, 5, 1],
        [2, 5, 1],
        [0, 4, 5],
        [4, 6, 2],
      ]),
    ).toBe(4);
  });
  test('Example 2', () => {
    expect(countPaths(2, [[1, 0, 10]])).toBe(1);
  });
});
