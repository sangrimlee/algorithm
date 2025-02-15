/**
 * 26. Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */
export function removeDuplicates(nums: number[]): number {
  let currentIndex = 1;
  for (const i of range(1, nums.length)) {
    if (nums[i - 1] !== nums[i]) {
      nums[currentIndex] = nums[i];
      currentIndex += 1;
    }
  }
  return currentIndex;
}

function* range(start: number, end?: number) {
  let value = end === undefined ? 0 : start;
  const endValue = end ?? start;
  while (value < endValue) {
    yield value++;
  }
}
