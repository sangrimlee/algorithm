import { exist } from './leetcode-79';

describe('2022-11-24: Leetcode 79', () => {
  test('Example 1', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];
    const word = 'ABCCED';
    expect(exist(board, word)).toBeTruthy();
  });

  test('Example 2', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];
    const word = 'SEE';
    expect(exist(board, word)).toBeTruthy();
  });

  test('Example 3', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];
    const word = 'ABCB';
    expect(exist(board, word)).toBeFalsy();
  });

  test('Example 4', () => {
    const board = [['a', 'a']];
    const word = 'aaa';
    expect(exist(board, word)).toBeFalsy();
  });

  test('Examle 5', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'E', 'S'],
      ['A', 'D', 'E', 'E'],
    ];
    const word = 'ABCESEEEFS';
    expect(exist(board, word)).toBeTruthy();
  });
});
