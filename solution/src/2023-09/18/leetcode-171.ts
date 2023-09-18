import { range } from '@algorithm/lib';

/**
 * 171. Excel Sheet Column Number
 * https://leetcode.com/problems/excel-sheet-column-number
 */
export function titleToNumber(columnTitle: string): number {
  const n = columnTitle.length;

  let answer = 0;
  for (const i of range(n - 1, -1, -1)) {
    const num = columnTitle.charCodeAt(i) - 64;
    answer += 26 ** (n - i - 1) * num;
  }
  return answer;
}
