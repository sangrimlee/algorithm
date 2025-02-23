/**
 * 1389. Create Target Array in the Given Order
 * https://leetcode.com/problems/create-target-array-in-the-given-order
 */
export function createTargetArray(nums: number[], indices: number[]): number[] {
  const answer: number[] = [];
  indices.forEach((index, numIndex) => {
    answer.splice(index, 0, nums[numIndex]);
  });
  return answer;
}
