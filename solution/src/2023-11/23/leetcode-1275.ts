/**
 * 1275. Find Winner on a Tic Tac Toe Game
 * https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game
 */
export function tictactoe(moves: number[][]): string {
  const n = moves.length;
  const rows = [0, 0, 0];
  const cols = [0, 0, 0];
  let [diag, antiDiag] = [0, 0];

  const isFinished = (...values: number[]) => {
    return values.some((v) => Math.abs(v) === 3);
  };

  for (let i = 0; i < n; i++) {
    const [row, col] = moves[i];
    const turn = i % 2 === 0 ? 1 : -1;
    rows[row] += turn;
    cols[col] += turn;
    if (row === col) {
      diag += turn;
    }
    if (row + col === 2) {
      antiDiag += turn;
    }
    if (isFinished(rows[row], cols[col], diag, antiDiag)) {
      return i % 2 === 0 ? 'A' : 'B';
    }
  }

  return n === 9 ? 'Draw' : 'Pending';
}
