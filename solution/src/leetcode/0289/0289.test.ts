import { gameOfLife } from './0289';

describe('LeetCode 0289', () => {
  test('Example 1', () => {
    const board = [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ];
    gameOfLife(board);
    expect(board).toEqual([
      [0, 0, 0],
      [1, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ]);
  });
  test('Example 2', () => {
    const board = [
      [1, 1],
      [1, 0],
    ];
    gameOfLife(board);
    expect(board).toEqual([
      [1, 1],
      [1, 1],
    ]);
  });
});
