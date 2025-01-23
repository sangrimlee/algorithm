/**
 * 1267. Count Servers that Communicate
 * https://leetcode.com/problems/count-servers-that-communicate
 */
export function countServers(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length];
  const rowCounts: number[] = new Array(m).fill(0);
  const colCounts: number[] = new Array(n).fill(0);
  grid.forEach((servers, row) => {
    servers.forEach((server, col) => {
      if (server === 1) {
        rowCounts[row] += 1;
        colCounts[col] += 1;
      }
    });
  });

  let answer = 0;
  grid.forEach((servers, row) => {
    servers.forEach((server, col) => {
      if (server === 1 && (1 < rowCounts[row] || 1 < colCounts[col])) {
        answer += 1;
      }
    });
  });
  return answer;
}
