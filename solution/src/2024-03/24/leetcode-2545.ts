/**
 * 2545. Sort the Students by Their Kth Score
 * https://leetcode.com/problems/sort-the-students-by-their-kth-score
 */
export function sortTheStudents(score: number[][], k: number): number[][] {
  return score.sort((s1, s2) => s2[k] - s1[k]);
}
