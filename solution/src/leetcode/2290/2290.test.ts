import { minimumObstacles } from './2290';

describe('LeetCode 2290', () => {
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
