/**
 * 2970. Count the Number of Incremovable Subarrays I
 * https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i
 */
export function incremovableSubarrayCount(nums: number[]): number {
  function isIncreasing(start: number, end: number, startNumber = -1) {
    let lastNumber = startNumber;
    for (let i = start; i < end; i++) {
      if (lastNumber >= nums[i]) {
        return false;
      }
      lastNumber = nums[i];
    }
    return true;
  }

  const n = nums.length;

  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (isIncreasing(0, i) && isIncreasing(j + 1, n, nums[i - 1])) {
        answer += 1;
      }
    }
  }
  return answer;
}
