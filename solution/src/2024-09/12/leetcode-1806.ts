/**
 * 1806. Minimum Number of Operations to Reinitialize a Permutation
 * https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation
 */
export function reinitializePermutation(n: number): number {
  const mid = n / 2;

  let answer = 1;
  let i = mid;
  while (1 < i) {
    if (i % 2 === 0) {
      i /= 2;
    } else {
      i = Math.floor(i / 2) + mid;
    }
    answer += 1;
  }
  return answer;
}
