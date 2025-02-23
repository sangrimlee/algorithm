import { solveNQueens } from './0051';

describe('LeetCode 0051', () => {
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
