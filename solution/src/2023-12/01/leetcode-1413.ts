/**
 * 1413. Minimum Value to Get Positive Step by Step Sum
 * https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum
 */
export function minStartValue(nums: number[]): number {
  let minValue = 0;
  let currentValue = 0;
  nums.forEach((num) => {
    currentValue += num;
    minValue = Math.min(minValue, currentValue);
  });
  return Math.max(-minValue, 0) + 1;
}
