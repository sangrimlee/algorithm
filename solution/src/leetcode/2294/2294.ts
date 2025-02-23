/**
 * 2294. Partition Array Such That Maximum Difference Is K
 * https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k
 */
export function partitionArray(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let answer = 1;
  let prev = 0;
  for (let i = 1; i < nums.length; i++) {
    if (k < nums[i] - nums[prev]) {
      answer += 1;
      prev = i;
    }
  }
  return answer;
}
