/**
 * 2239. Find Closest Number to Zero
 * https://leetcode.com/problems/find-closest-number-to-zero
 */
export function findClosestNumber(nums: number[]): number {
  return nums.reduce((answer, num) => {
    if (Math.abs(num) === Math.abs(answer)) {
      return Math.max(num, answer);
    }
    return Math.abs(num) < Math.abs(answer) ? num : answer;
  }, Number.MAX_SAFE_INTEGER);
}
