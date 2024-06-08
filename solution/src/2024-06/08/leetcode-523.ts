/**
 * 523. Continuous Subarray Sum
 * https://leetcode.com/problems/continuous-subarray-sum
 */
export function checkSubarraySum(nums: number[], k: number): boolean {
  const n = nums.length;
  const map = new Map<number, number>([[0, -1]]);

  let diff = 0;
  for (let i = 0; i < n; i++) {
    diff = (diff + nums[i]) % k;

    const prevIndex = map.get(diff);
    if (prevIndex !== undefined) {
      if (i - prevIndex > 1) {
        return true;
      }
    } else {
      map.set(diff, i);
    }
  }
  return false;
}
