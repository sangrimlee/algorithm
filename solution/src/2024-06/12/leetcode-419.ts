/**
 * 419. Battleships in a Board
 * https://leetcode.com/problems/battleships-in-a-board
 */
export function countBattleships(board: string[][]): number {
  const [m, n] = [board.length, board[0].length];

  function isBattleship(y: number, x: number) {
    return (
      board[y][x] === 'X' &&
      (y === 0 || board[y - 1][x] === '.') &&
      (x === 0 || board[y][x - 1] === '.')
    );
  }

  let answer = 0;
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (isBattleship(y, x)) {
        answer += 1;
      }
    }
  }
  return answer;
}
