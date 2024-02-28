/**
 * 2367. Number of Arithmetic Triplets
 * https://leetcode.com/problems/number-of-arithmetic-triplets
 */
export function arithmeticTriplets(nums: number[], diff: number): number {
  const set = new Set(nums);
  return nums.filter((num) => set.has(num + diff) && set.has(num + diff * 2)).length;
}
