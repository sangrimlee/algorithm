/**
 * 2563. Count the Number of Fair Pairs
 * https://leetcode.com/problems/count-the-number-of-fair-pairs
 */
export function countFairPairs(nums: number[], lower: number, upper: number): number {
  nums.sort((a, b) => a - b);
  return countMinPairs(nums, upper + 1) - countMinPairs(nums, lower);
}

function countMinPairs(nums: number[], target: number) {
  let [start, end] = [0, nums.length - 1];
  let result = 0;
  while (start < end) {
    const sum = nums[start] + nums[end];
    if (sum < target) {
      result += end - start;
      start += 1;
    } else {
      end -= 1;
    }
  }
  return result;
}
