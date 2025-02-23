import { nearestExit } from './1926';

describe('LeetCode 1926', () => {
  test('Example 1', () => {
    const maze = [
      ['+', '+', '.', '+'],
      ['.', '.', '.', '+'],
      ['+', '+', '+', '.'],
    ];
    const entrance = [1, 2];
    expect(nearestExit(maze, entrance)).toBe(1);
  });

  test('Example 2', () => {
    const maze = [
      ['+', '+', '+'],
      ['.', '.', '.'],
      ['+', '+', '+'],
    ];
    const entrance = [1, 0];
    expect(nearestExit(maze, entrance)).toBe(2);
  });

  test('Example 3', () => {
    const maze = [['.', '+']];
    const entrance = [0, 0];
    expect(nearestExit(maze, entrance)).toBe(-1);
  });
});
