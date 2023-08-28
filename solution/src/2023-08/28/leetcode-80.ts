/**
 * 80. Remove Duplicates from Sorted Array II
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii
 */
export function removeDuplicates(nums: number[]): number {
  let currentIndex = 0;
  for (const num of nums) {
    if (currentIndex < 2 || nums[currentIndex - 2] < num) {
      nums[currentIndex] = num;
      currentIndex += 1;
    }
  }
  return currentIndex;
}
