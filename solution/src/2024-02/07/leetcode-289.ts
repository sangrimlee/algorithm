/**
 * 289. Game of Life
 * https://leetcode.com/problems/game-of-life
 */
export function gameOfLife(board: number[][]): void {
  const [m, n] = [board.length, board[0].length];
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
  ];

  function getLiveNeighbors(y: number, x: number) {
    let liveNeighbors = 0;
    for (const [dy, dx] of directions) {
      const [ny, nx] = [y + dy, x + dx];
      if (0 <= ny && ny < m && 0 <= nx && nx < n && Math.abs(board[ny][nx]) === 1) {
        liveNeighbors += 1;
      }
    }
    return liveNeighbors;
  }

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      const liveNeighbors = getLiveNeighbors(y, x);
      if (board[y][x] === 1) {
        if (liveNeighbors < 2 || 3 < liveNeighbors) {
          board[y][x] = -1;
        }
      } else {
        if (liveNeighbors === 3) {
          board[y][x] = 2;
        }
      }
    }
  }

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (board[y][x] === 2) {
        board[y][x] = 1;
      } else if (board[y][x] === -1) {
        board[y][x] = 0;
      }
    }
  }
}
