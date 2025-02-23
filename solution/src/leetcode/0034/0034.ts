/**
 * 34. Find First and Last Position of Element in Sorted Array
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array
 */
export function searchRange(nums: number[], target: number): number[] {
  const search = (num: number) => {
    let [start, end] = [0, nums.length];
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (num <= nums[mid]) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };

  const [start, end] = [search(target), search(target + 1) - 1];

  if (start <= end) {
    return [start, end];
  }

  return [-1, -1];
}
