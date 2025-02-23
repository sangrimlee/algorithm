/**
 * 974. Subarray Sums Divisible by K
 * https://leetcode.com/problems/subarray-sums-divisible-by-k
 */
export function subarraysDivByK(nums: number[], k: number): number {
  let answer = 0;
  let sum = 0;
  const counts = new Map<number, number>([[0, 1]]);

  for (const num of nums) {
    sum += num;
    const mod = sum % k < 0 ? (sum % k) + k : sum % k;
    const count = counts.get(mod) ?? 0;
    answer += count;
    counts.set(mod, count + 1);
  }

  return answer;
}
