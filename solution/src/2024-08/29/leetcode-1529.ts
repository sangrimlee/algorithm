/**
 * 1529. Minimum Suffix Flips
 * https://leetcode.com/problems/minimum-suffix-flips
 */
export function minFlips(target: string): number {
  let answer = 0;
  let current = '0';
  for (const char of target) {
    if (current !== char) {
      current = char;
      answer += 1;
    }
  }
  return answer;
}
