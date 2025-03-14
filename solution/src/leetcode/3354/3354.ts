/**
 * 3354. Make Array Elements Equal to Zero
 * https://leetcode.com/problems/make-array-elements-equal-to-zero
 */
export function countValidSelections(nums: number[]): number {
  const n = nums.length;
  const totalSum = nums.reduce((acc, num) => acc + num, 0);

  let answer = 0;
  let leftSum = 0;
  for (let i = 0; i < n; i++) {
    leftSum += nums[i];
    if (nums[i] !== 0) {
      continue;
    }
    const rightSum = totalSum - leftSum;
    if (leftSum === rightSum) {
      answer += 2;
    } else if (Math.abs(leftSum - rightSum) === 1) {
      answer += 1;
    }
  }
  return answer;
}
