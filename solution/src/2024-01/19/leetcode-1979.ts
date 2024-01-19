/**
 * 1979. Find Greatest Common Divisor of Array
 * https://leetcode.com/problems/find-greatest-common-divisor-of-array
 */
export function findGCD(nums: number[]): number {
  let [min, max] = nums.reduce(
    ([min, max], num) => [Math.min(min, num), Math.max(max, num)],
    [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER],
  );
  while (0 < min) {
    [min, max] = [max % min, min];
  }
  return max;
}
