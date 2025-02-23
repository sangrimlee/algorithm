/**
 * 2924. Find Champion II
 * https://leetcode.com/problems/find-champion-ii
 */
export function findChampion(n: number, edges: number[][]): number {
  let championCount = n;
  const isChampion = new Array<boolean>(n).fill(true);
  for (const [, loser] of edges) {
    if (isChampion[loser]) {
      isChampion[loser] = false;
      championCount -= 1;
    }
  }
  return championCount === 1 ? isChampion.indexOf(true) : -1;
}
