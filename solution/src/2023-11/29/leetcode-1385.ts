/**
 * 1385. Find the Distance Value Between Two Arrays
 * https://leetcode.com/problems/find-the-distance-value-between-two-arrays
 */
export function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
  return arr1.filter((num1) => arr2.every((num2) => Math.abs(num1 - num2) > d)).length;
}
