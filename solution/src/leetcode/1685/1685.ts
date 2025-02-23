/**
 * 1685. Sum of Absolute Differences in a Sorted Array
 * https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array
 */
export function getSumAbsoluteDifferences(nums: number[]): number[] {
  const n = nums.length;
  const total = nums.reduce((acc, num) => acc + num, 0);
  let [leftSum, rightSum] = [0, total];
  const answer: number[] = [];
  nums.forEach((num, i) => {
    answer.push(rightSum - leftSum + (2 * i - n) * num);
    leftSum += num;
    rightSum -= num;
  });
  return answer;
}
