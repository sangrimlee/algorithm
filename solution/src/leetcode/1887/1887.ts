/**
 * 1887. Reduction Operations to Make the Array Elements Equal
 * https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal
 */
export function reductionOperations(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  let answer = 0;
  let prevLargestCount = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] !== nums[i]) {
      prevLargestCount += 1;
    }
    answer += prevLargestCount;
  }
  return answer;
}
