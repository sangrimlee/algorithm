/**
 * 215. Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 */

function swap(nums: number[], i: number, j: number) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

function quickSelect(
  nums: number[],
  left: number,
  right: number,
  k: number
): number {
  let pivot = left;

  for (let i = left; i < right; i++) {
    if (nums[i] <= nums[right]) {
      swap(nums, pivot, i);
      pivot += 1;
    }
  }
  swap(nums, pivot, right);

  const count = right - pivot + 1;
  if (count === k) {
    return nums[pivot];
  } else if (k < count) {
    return quickSelect(nums, pivot + 1, right, k);
  } else {
    return quickSelect(nums, left, pivot - 1, k - count);
  }
}

export function findKthLargest(nums: number[], k: number): number {
  return quickSelect(nums, 0, nums.length - 1, k);
}

/* Using Sort
function findKthLargest(nums: number[], k: number): number {
  return nums.sort((a, b) => b - a)[k - 1];
}
*/
