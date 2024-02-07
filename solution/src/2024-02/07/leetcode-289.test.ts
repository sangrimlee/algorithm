import { gameOfLife } from './leetcode-289';

describe('2024-02-07: LeetCode 289', () => {
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
