/**
 * 79. Word Search
 * https://leetcode.com/problems/word-search/
 */
export function exist(board: string[][], word: string): boolean {
  const [n, m] = [board.length, board[0].length];
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const dfs = (y: number, x: number, i: number, visited: boolean[][]): boolean => {
    if (i === word.length - 1) {
      return true;
    }

    for (const [dy, dx] of directions) {
      const [ny, nx, ni] = [y + dy, x + dx, i + 1];
      if (0 <= ny && ny < n && 0 <= nx && nx < m) {
        if (!visited[ny][nx] && board[ny][nx] === word[ni]) {
          visited[ny][nx] = true;
          if (dfs(ny, nx, ni, visited)) {
            return true;
          }
          visited[ny][nx] = false;
        }
      }
    }
    return false;
  };

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (board[y][x] === word[0]) {
        const visited: boolean[][] = Array.from({ length: n }, () =>
          new Array<boolean>(m).fill(false),
        );

        visited[y][x] = true;
        if (dfs(y, x, 0, visited)) {
          return true;
        }
      }
    }
  }
  return false;
}
