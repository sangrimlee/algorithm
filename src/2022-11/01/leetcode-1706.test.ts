import { findBall } from './leetcode-1706';

describe('2022-11-01: Leetcode 1706', () => {
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
