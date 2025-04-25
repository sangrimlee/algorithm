/**
 * 2845. Count of Interesting Subarrays
 * https://leetcode.com/problems/count-of-interesting-subarrays
 */
export function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
  const counter = new Map<number, number>([[0, 1]]);

  let answer = 0;
  let prefixSum = 0;
  for (const num of nums) {
    prefixSum += num % modulo === k ? 1 : 0;
    const requireRemainder = (prefixSum - k + modulo) % modulo;
    answer += counter.get(requireRemainder) ?? 0;

    const currentRemainder = prefixSum % modulo;
    counter.set(currentRemainder, (counter.get(currentRemainder) ?? 0) + 1);
  }
  return answer;
}
