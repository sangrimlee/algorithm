/**
 * 2315. Count Asterisks
 * https://leetcode.com/problems/count-asterisks
 */
export function countAsterisks(s: string): number {
  let answer = 0;
  let barCount = 0;
  for (const char of s) {
    if (char === '*' && barCount % 2 === 0) {
      answer += 1;
    }
    if (char === '|') {
      barCount += 1;
    }
  }
  return answer;
}
