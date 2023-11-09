/**
 * 1759. Count Number of Homogenous Substrings
 * https://leetcode.com/problems/count-number-of-homogenous-substrings
 */
export function countHomogenous(s: string): number {
  const n = s.length;
  const MOD = 10 ** 9 + 7;

  let answer = 1;
  let homogenous = 1;
  for (let i = 1; i < n; i++) {
    if (s[i - 1] === s[i]) {
      homogenous += 1;
    } else {
      homogenous = 1;
    }
    answer = (answer + homogenous) % MOD;
  }

  return answer;
}
