import { tictactoe } from './leetcode-1275';

describe('2023-11-23: LeetCode 1275', () => {
  test('Example 1', () => {
    expect(
      tictactoe([
        [0, 0],
        [2, 0],
        [1, 1],
        [2, 1],
        [2, 2],
      ]),
    ).toBe('A');
  });
  test('Example 2', () => {
    expect(
      tictactoe([
        [0, 0],
        [1, 1],
        [0, 1],
        [0, 2],
        [1, 0],
        [2, 0],
      ]),
    ).toBe('B');
  });
  test('Example 3', () => {
    expect(
      tictactoe([
        [0, 0],
        [1, 1],
        [2, 0],
        [1, 0],
        [1, 2],
        [2, 1],
        [0, 1],
        [0, 2],
        [2, 2],
      ]),
    ).toBe('Draw');
  });
});
