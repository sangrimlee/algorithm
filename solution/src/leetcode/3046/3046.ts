/**
 * 3046. Split the Array
 * https://leetcode.com/problems/split-the-array
 */
export function isPossibleToSplit(nums: number[]): boolean {
  const counter = new Map<number, number>();
  for (const num of nums) {
    const count = counter.get(num) ?? 0;
    if (2 <= count) {
      return false;
    }
    counter.set(num, count + 1);
  }
  return true;
}
