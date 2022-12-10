/**
 * 665. Non-decreasing Array
 * https://leetcode.com/problems/non-decreasing-array/
 */
export function checkPossibility(nums: number[]): boolean {
  const n = nums.length;

  let nonDecreasingIndex = -1;
  for (let currentIndex = 0; currentIndex < nums.length - 1; currentIndex++) {
    if (nums[currentIndex + 1] < nums[currentIndex]) {
      if (nonDecreasingIndex !== -1) {
        return false;
      }
      nonDecreasingIndex = currentIndex;
    }
  }
  return (
    [-1, 0, n - 2].includes(nonDecreasingIndex) ||
    nums[nonDecreasingIndex - 1] <= nums[nonDecreasingIndex + 1] ||
    nums[nonDecreasingIndex] < nums[nonDecreasingIndex + 2]
  );
}
