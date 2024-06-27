/**
 * 3194. Minimum Average of Smallest and Largest Elements
 * https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements
 */
export function minimumAverage(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  let answer = Number.MAX_SAFE_INTEGER;
  let [left, right] = [0, n - 1];
  while (left < right) {
    answer = Math.min(answer, (nums[left] + nums[right]) / 2);
    left += 1;
    right -= 1;
  }
  return answer;
}
