import { totalNQueens } from './0052';

describe('LeetCode 0052', () => {
  test('Example 1', () => {
    expect(totalNQueens(4)).toBe(2);
  });

  test('Example 2', () => {
    expect(totalNQueens(1)).toBe(1);
  });

  test('Example 3', () => {
    expect(totalNQueens(9)).toBe(352);
  });
});
