/**
 * 1926. Nearest Exit from Entrance in Maze
 * https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/
 */
export function nearestExit(maze: string[][], entrance: number[]): number {
  const [ey, ex] = entrance;
  const [n, m] = [maze.length, maze[0].length];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const visited = Array.from({ length: n }, () => new Array<boolean>(m).fill(false));
  visited[ey][ex] = true;

  const isExit = (y: number, x: number) => {
    return y === 0 || x === 0 || y === n - 1 || x === m - 1;
  };

  let currentCells = [[...entrance, 0]];
  while (0 < currentCells.length) {
    const nextCells: number[][] = [];
    for (const [cy, cx, cstep] of currentCells) {
      for (const [dy, dx] of directions) {
        const [ny, nx] = [cy + dy, cx + dx];
        if (0 <= ny && ny < n && 0 <= nx && nx < m) {
          if (!visited[ny][nx] && maze[ny][nx] === '.') {
            if (isExit(ny, nx)) {
              return cstep + 1;
            }
            nextCells.push([ny, nx, cstep + 1]);
            visited[ny][nx] = true;
          }
        }
      }
    }
    currentCells = nextCells;
  }

  return -1;
}
