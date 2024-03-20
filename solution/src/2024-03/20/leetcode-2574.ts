/**
 * 2574. Left and Right Sum Differences
 * https://leetcode.com/problems/left-and-right-sum-differences
 */
export function leftRightDifference(nums: number[]): number[] {
  let leftSum = 0;
  let rightSum = nums.reduce((acc, num) => acc + num, 0);

  const answer: number[] = [];
  for (const num of nums) {
    leftSum += num;
    answer.push(Math.abs(leftSum - rightSum));
    rightSum -= num;
  }
  return answer;
}
