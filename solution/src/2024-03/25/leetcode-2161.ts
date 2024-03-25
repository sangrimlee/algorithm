/**
 * 2161. Partition Array According to Given Pivot
 * https://leetcode.com/problems/partition-array-according-to-given-pivot
 */
export function pivotArray(nums: number[], pivot: number): number[] {
  let pivotCount = 0;
  const lessThan: number[] = [];
  const greaterThan: number[] = [];

  nums.forEach((num) => {
    if (num === pivot) {
      pivotCount += 1;
    } else if (num < pivot) {
      lessThan.push(num);
    } else {
      greaterThan.push(num);
    }
  });

  return [...lessThan, ...new Array(pivotCount).fill(pivot), ...greaterThan];
}
