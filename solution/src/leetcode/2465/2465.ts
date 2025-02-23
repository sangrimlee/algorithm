/**
 * 2465. Number of Distinct Averages
 * https://leetcode.com/problems/number-of-distinct-averages
 */
export function distinctAverages(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  const averages = new Set();
  let [start, end] = [0, n - 1];
  while (start < end) {
    averages.add((nums[start] + nums[end]) / 2);
    start += 1;
    end -= 1;
  }
  return averages.size;
}
