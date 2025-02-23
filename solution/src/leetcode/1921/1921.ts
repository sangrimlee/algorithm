/**
 * 1921. Eliminate Maximum Number of Monsters
 * https://leetcode.com/problems/eliminate-maximum-number-of-monsters
 */
export function eliminateMaximum(dists: number[], speeds: number[]): number {
  const n = dists.length;
  const remainMinutes = dists.map((dist, i) => Math.ceil(dist / speeds[i])).sort((a, b) => a - b);

  let answer = 0;
  while (answer < n && answer < remainMinutes[answer]) {
    answer += 1;
  }
  return answer;
}
