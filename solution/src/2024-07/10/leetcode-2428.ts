/**
 * 2428. Maximum Sum of an Hourglass
 * https://leetcode.com/problems/maximum-sum-of-an-hourglass
 */
export function maxSum(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length];

  let answer = 0;
  for (let y = 0; y < m - 2; y++) {
    for (let x = 0; x < n - 2; x++) {
      answer = Math.max(answer, sumHourglass(grid, y, x));
    }
  }
  return answer;
}

function sumHourglass(grid: number[][], y: number, x: number) {
  let result = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === 1 && j !== 1) continue;
      result += grid[y + i][x + j];
    }
  }
  return result;
}
