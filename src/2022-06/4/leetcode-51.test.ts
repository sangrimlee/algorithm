import { solveNQueens } from './leetcode-51';

describe('2022-06-04: LeetCode 51', () => {
  test('Example 1', () => {
    expect(solveNQueens(4)).toEqual([
      ['.Q..', '...Q', 'Q...', '..Q.'],
      ['..Q.', 'Q...', '...Q', '.Q..'],
    ]);
  });

  test('Example 2', () => {
    expect(solveNQueens(1)).toEqual([['Q']]);
  });
});
