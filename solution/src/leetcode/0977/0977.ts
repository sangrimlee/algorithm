/**
 * 977. Squares of a Sorted Array
 * https://leetcode.com/problems/squares-of-a-sorted-array
 */
export function sortedSquares(nums: number[]): number[] {
  const n = nums.length;
  const answer = new Array<number>(n).fill(0);

  let [left, right] = [0, n - 1];
  for (let i = n - 1; 0 <= i; i--) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      answer[i] = nums[right] ** 2;
      right -= 1;
    } else {
      answer[i] = nums[left] ** 2;
      left += 1;
    }
  }
  return answer;
}
