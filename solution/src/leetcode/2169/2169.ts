/**
 * 2169. Count Operations to Obtain Zero
 * https://leetcode.com/problems/count-operations-to-obtain-zero
 */
export function countOperations(num1: number, num2: number): number {
  return num1 * num2 === 0 ? 0 : Math.floor(num1 / num2) + countOperations(num2, num1 % num2);
}
