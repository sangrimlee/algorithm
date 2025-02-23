/**
 * 442. Find All Duplicates in an Array
 * https://leetcode.com/problems/find-all-duplicates-in-an-array
 */
export function findDuplicates(nums: number[]): number[] {
  const answer: number[] = [];
  nums.forEach((num) => {
    if (nums[Math.abs(num) - 1] < 0) {
      answer.push(Math.abs(num));
    } else {
      nums[Math.abs(num) - 1] *= -1;
    }
  });
  return answer;
}
