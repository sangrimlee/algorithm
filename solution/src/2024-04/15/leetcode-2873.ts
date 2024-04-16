/**
 * 2873. Maximum Value of an Ordered Triplet I
 * https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i
 */
export function maximumTripletValue(nums: number[]): number {
  const n = nums.length;

  let answer = 0;
  let maxi = Math.max(nums[0], nums[1]);
  let maxij = nums[0] - nums[1];
  for (let k = 2; k < n; k++) {
    answer = Math.max(answer, maxij * nums[k]);
    maxi = Math.max(maxi, nums[k - 1]);
    maxij = Math.max(maxij, maxi - nums[k]);
  }
  return answer;
}
