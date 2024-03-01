/**
 * 2395. Find Subarrays With Equal Sum
 * https://leetcode.com/problems/find-subarrays-with-equal-sum
 */
export function findSubarrays(nums: number[]): boolean {
  const n = nums.length;
  const set = new Set();
  for (let i = 0; i < n - 1; i++) {
    const sum = nums[i] + nums[i + 1];
    if (set.has(sum)) {
      return true;
    } else {
      set.add(sum);
    }
  }
  return false;
}
