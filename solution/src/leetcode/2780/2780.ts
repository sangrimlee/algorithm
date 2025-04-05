/**
 * 2780. Minimum Index of a Valid Split
 * https://leetcode.com/problems/minimum-index-of-a-valid-split
 */
export function minimumIndex(nums: number[]): number {
  const n = nums.length;
  const dominantElement = findDominantElement(nums);
  const totalCount = nums.reduce((count, num) => (num === dominantElement ? count + 1 : count), 0);

  let leftCount = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === dominantElement) {
      leftCount += 1;
    }

    const rightCount = totalCount - leftCount;
    if (2 * leftCount > i + 1 && 2 * rightCount > n - i - 1) {
      return i;
    }
  }
  return -1;
}

function findDominantElement(nums: number[]): number {
  let count = 0;
  let candidate = 0;
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += candidate === num ? 1 : -1;
  }
  return candidate;
}
