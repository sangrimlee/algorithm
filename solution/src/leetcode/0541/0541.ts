import { range } from '@algorithm/lib';

/**
 * 541. Reverse String II
 * https://leetcode.com/problems/reverse-string-ii
 */
export function reverseStr(s: string, k: number): string {
  const reverse = (s: string) => s.split('').reverse().join('');

  const n = s.length;
  let answer = '';
  for (const i of range(0, n, 2 * k)) {
    answer += reverse(s.substring(i, i + k)) + s.substring(i + k, i + 2 * k);
  }
  return answer;
}
