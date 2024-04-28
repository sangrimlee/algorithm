/**
 * 3019. Number of Changing Keys
 * https://leetcode.com/problems/number-of-changing-keys
 */
export function countKeyChanges(s: string): number {
  const str = s.toLowerCase();
  let answer = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== str[i + 1]) {
      answer += 1;
    }
  }
  return answer;
}
