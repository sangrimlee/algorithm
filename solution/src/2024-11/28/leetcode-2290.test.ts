import { minimumObstacles } from './leetcode-2290';

describe('2024-11-28: LeetCode 2290', () => {
  test('Example 1', () => {
    expect(
      minimumObstacles([
        [0, 1, 1],
        [1, 1, 0],
        [1, 1, 0],
      ]),
    ).toBe(2);
  });
  test('Example 2', () => {
    expect(
      minimumObstacles([
        [0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0],
      ]),
    ).toBe(0);
  });
});
