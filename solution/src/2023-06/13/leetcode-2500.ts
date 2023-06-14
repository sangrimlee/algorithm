/**
 * 2500. Delete Greatest Value in Each Row
 * https://leetcode.com/problems/delete-greatest-value-in-each-row
 */
export function deleteGreatestValue(grid: number[][]): number {
  grid.forEach((row) => row.sort((a, b) => a - b));

  let answer = 0;
  while (0 < grid[0].length) {
    let maxValue = 0;
    grid.forEach((row) => {
      maxValue = Math.max(row.pop() || 0, maxValue);
    });
    answer += maxValue;
  }

  return answer;
}
