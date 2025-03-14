/**
 * 36. Valid Sudoku
 * https://leetcode.com/problems/valid-sudoku/
 */
export function isValidSudoku(board: string[][]): boolean {
  const isNumber = (value: string) => /^[0-9]+$/.test(value);

  function isValid(value: string, indicator: boolean[]): boolean {
    if (!isNumber(value)) {
      return true;
    }
    const num = parseInt(value);
    if (indicator[num]) {
      return false;
    }
    return (indicator[num] = true);
  }

  const n = board.length;

  for (let y = 0; y < n; y++) {
    const row = new Array<boolean>(10).fill(false);
    const col = new Array<boolean>(10).fill(false);
    const square = new Array<boolean>(10).fill(false);
    for (let x = 0; x < n; x++) {
      const sy = Math.floor(y / 3) * 3 + Math.floor(x / 3);
      const sx = (y % 3) * 3 + (x % 3);
      if (
        !isValid(board[y][x], row) ||
        !isValid(board[x][y], col) ||
        !isValid(board[sy][sx], square)
      ) {
        return false;
      }
    }
  }
  return true;
}
