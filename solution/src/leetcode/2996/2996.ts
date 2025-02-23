/**
 * 2996. Smallest Missing Integer Greater Than Sequential Prefix Sum
 * https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum
 */
export function missingInteger(nums: number[]): number {
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] + 1 !== nums[i]) break;
    sum += nums[i];
  }

  const set = new Set(nums);
  while (set.has(sum)) {
    sum += 1;
  }
  return sum;
}
