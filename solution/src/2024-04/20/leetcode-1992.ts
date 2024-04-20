/**
 * 1992. Find All Groups of Farmland
 * https://leetcode.com/problems/find-all-groups-of-farmland
 */
export function findFarmland(land: number[][]): number[][] {
  const [m, n] = [land.length, land[0].length];
  function dfs(r: number, c: number): [number, number] {
    if (r < 0 || m <= r || c < 0 || n <= c || land[r][c] === 0) {
      return [0, 0];
    }
    land[r][c] = 0;
    const [r1, c1] = dfs(r + 1, c);
    const [r2, c2] = dfs(r, c + 1);

    return [Math.max(r1, r2, r), Math.max(c1, c2, c)];
  }

  const answer: number[][] = [];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (land[r][c] === 1) {
        answer.push([r, c, ...dfs(r, c)]);
      }
    }
  }
  return answer;
}
