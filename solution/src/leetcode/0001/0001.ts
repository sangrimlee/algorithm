/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum
 */
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    const findIndex = map.get(target - currentValue);
    if (findIndex !== undefined) {
      return [findIndex, i];
    } else {
      map.set(currentValue, i);
    }
  }
  throw new Error('There is no solution.');
}
