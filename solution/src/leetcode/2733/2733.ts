/**
 * 2733. Neither Minimum nor Maximum
 * https://leetcode.com/problems/neither-minimum-nor-maximum
 */
export function findNonMinOrMax(nums: number[]): number {
  const [minValue, maxValue] = nums.reduce(
    ([prevMin, prevMax], num) => [Math.min(prevMin, num), Math.max(prevMax, num)],
    [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER],
  );

  for (const num of nums) {
    if (num !== minValue && num !== maxValue) {
      return num;
    }
  }
  return -1;
}
