/**
 * 2971. Find Polygon With the Largest Perimeter
 * https://leetcode.com/problems/find-polygon-with-the-largest-perimeter
 */
export function largestPerimeter(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  let sum = nums.reduce((acc, num) => acc + num, 0);
  for (let k = n - 1; 2 <= k; k--) {
    sum -= nums[k];
    if (sum > nums[k]) {
      return sum + nums[k];
    }
  }
  return -1;
}
