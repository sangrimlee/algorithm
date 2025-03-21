/**
 * 2017. Grid Game
 * https://leetcode.com/problems/grid-game
 */
export function gridGame(grid: number[][]): number {
  const n = grid[0].length;
  const firstRowSum = grid[0].reduce((acc, point) => acc + point, 0);

  let answer = Number.MAX_SAFE_INTEGER;
  let [firstRow, secondRow] = [firstRowSum, 0];
  for (let turnIndex = 0; turnIndex < n; turnIndex++) {
    firstRow -= grid[0][turnIndex];
    answer = Math.min(answer, Math.max(firstRow, secondRow));
    secondRow += grid[1][turnIndex];
  }
  return answer;
}
