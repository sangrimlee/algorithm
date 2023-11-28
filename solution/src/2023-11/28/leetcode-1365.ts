/**
 * 1365. How Many Numbers Are Smaller Than the Current Number
 * https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number
 */
export function smallerNumbersThanCurrent(nums: number[]): number[] {
  const smallestIndices = new Map<number, number>();
  const sortedNums = [...nums].sort((a, b) => a - b);
  sortedNums.forEach((num, i) => {
    if (!smallestIndices.has(num)) {
      smallestIndices.set(num, i);
    }
  });
  return nums.map((num) => smallestIndices.get(num) ?? -1);
}
