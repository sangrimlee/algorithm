/**
 * 945. Minimum Increment to Make Array Unique
 * https://leetcode.com/problems/minimum-increment-to-make-array-unique
 */
export function minIncrementForUnique(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let answer = 0;
  let maxNum = 0;
  for (const num of nums) {
    answer += Math.max(maxNum - num, 0);
    maxNum = Math.max(num, maxNum) + 1;
  }
  return answer;
}
