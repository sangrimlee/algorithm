/**
 * 3254. Find the Power of K-Size Subarrays I
 * https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i
 */
export function resultsArray(nums: number[], k: number): number[] {
  if (k === 1) {
    return nums;
  }

  const n = nums.length;
  const answer = [];

  let [left, right] = [0, 1];
  while (right < n) {
    const isConsecutive = nums[right] - nums[right - 1] === 1;

    if (!isConsecutive) {
      while (left < right && left + k - 1 < n) {
        answer.push(-1);
        left += 1;
      }
      left = right;
    } else if (right - left === k - 1) {
      answer.push(nums[right]);
      left += 1;
    }
    right += 1;
  }
  return answer;
}
