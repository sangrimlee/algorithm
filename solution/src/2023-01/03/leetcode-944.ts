import { range } from '@algorithm/lib';

/**
 * 944. Delete Columns to Make Sorted
 * https://leetcode.com/problems/delete-columns-to-make-sorted
 */
export function minDeletionSize(strs: string[]): number {
  const [n, m] = [strs.length, strs[0].length];

  let answer = 0;
  for (const col of range(m)) {
    for (const row of range(1, n)) {
      if (strs[row][col] < strs[row - 1][col]) {
        answer += 1;
        break;
      }
    }
  }
  return answer;
}
