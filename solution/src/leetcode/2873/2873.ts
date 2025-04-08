/**
 * 2873. Maximum Value of an Ordered Triplet I
 * https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i
 */
export function maximumTripletValue(nums: number[]): number {
  const n = nums.length;

  let answer = 0;
  let maxI = Math.max(nums[0], nums[1]);
  let maxDiff = nums[0] - nums[1];
  for (let k = 2; k < n; k++) {
    answer = Math.max(answer, maxDiff * nums[k]);
    maxDiff = Math.max(maxDiff, maxI - nums[k]);
    maxI = Math.max(maxI, nums[k]);
  }
  return answer;
}
