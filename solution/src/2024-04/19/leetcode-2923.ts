/**
 * 2923. Find Champion I
 * https://leetcode.com/problems/find-champion-i
 */
export function findChampion(grid: number[][]): number {
  const n = grid.length;
  let champion = 0;
  for (let team = 0; team < n; team++) {
    if (champion !== team && grid[champion][team] === 0) {
      champion = team;
    }
  }
  return champion;
}
