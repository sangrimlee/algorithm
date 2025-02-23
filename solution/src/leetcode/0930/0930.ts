/**
 * 930. Binary Subarrays With Sum
 * https://leetcode.com/problems/binary-subarrays-with-sum/
 */
export function numSubarraysWithSum(nums: number[], goal: number): number {
  const counter = new Map<number, number>([[0, 1]]);
  let answer = 0;
  let sum = 0;
  for (const num of nums) {
    sum += num;
    answer += counter.get(sum - goal) ?? 0;
    counter.set(sum, (counter.get(sum) ?? 0) + 1);
  }
  return answer;
}
