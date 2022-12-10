/**
 * 1706. Where Will the Ball Fall
 * https://leetcode.com/problems/where-will-the-ball-fall/
 */
export function findBall(grid: number[][]): number[] {
  const [n, m] = [grid.length, grid[0].length];

  const isFinished = (y: number, x: number) => {
    const direction = grid[y][x];
    return x + direction < 0 || m <= x + direction || direction !== grid[y][x + direction];
  };

  const dfs = (x: number) => {
    let cx = x;
    for (let cy = 0; cy < n; cy++) {
      if (isFinished(cy, cx)) return -1;
      cx += grid[cy][cx];
    }
    return cx;
  };

  const answer = new Array(m).fill(undefined).map((_, i) => dfs(i));
  return answer;
}
