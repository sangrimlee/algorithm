/**
 * 1218. Longest Arithmetic Subsequence of Given Difference
 * https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference
 */
export function longestSubsequence(arr: number[], difference: number): number {
  const dp = new Map<number, number>();

  let answer = 1;
  for (const value of arr) {
    const prevValue = dp.get(value - difference) ?? 0;
    dp.set(value, prevValue + 1);
    answer = Math.max(answer, prevValue + 1);
  }
  return answer;
}
