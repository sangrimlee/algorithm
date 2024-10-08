/**
 * 1590. Make Sum Divisible by P
 * https://leetcode.com/problems/make-sum-divisible-by-p
 */
export function minSubarray(nums: number[], p: number): number {
  const target = nums.reduce((acc, num) => acc + num, 0) % p;
  if (target === 0) {
    return 0;
  }

  const n = nums.length;
  const dp = new Map<number, number>([[0, -1]]);
  let answer = n;
  let prefixSum = 0;
  for (let i = 0; i < n; i++) {
    prefixSum += nums[i];
    const prevIndex = dp.get(((prefixSum % p) - target + p) % p);
    if (prevIndex !== undefined) {
      answer = Math.min(answer, i - prevIndex);
    }
    dp.set(prefixSum % p, i);
  }
  return answer < n ? answer : -1;
}
