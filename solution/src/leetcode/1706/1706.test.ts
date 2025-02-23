import { findBall } from './1706';

describe('LeetCode 1706', () => {
  test('Example 1', () => {
    const grid = [
      [1, 1, 1, -1, -1],
      [1, 1, 1, -1, -1],
      [-1, -1, -1, 1, 1],
      [1, 1, 1, 1, -1],
      [-1, -1, -1, -1, -1],
    ];
    expect(findBall(grid)).toEqual([1, -1, -1, -1, -1]);
  });

  test('Example 2', () => {
    const grid = [[-1]];
    expect(findBall(grid)).toEqual([-1]);
  });

  test('Example 3', () => {
    const grid = [
      [1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1],
      [1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1],
    ];
    expect(findBall(grid)).toEqual([0, 1, 2, 3, 4, -1]);
  });
});
