/**
 * 167. Two Sum II - Input Array Is Sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */
export function twoSum(numbers: number[], target: number): number[] {
  let [left, right] = [0, numbers.length];
  while (left < right) {
    const sumValue = numbers[left] + numbers[right];
    if (sumValue === target) {
      return [left + 1, right + 1];
    } else if (sumValue < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  throw new Error('There is no solution');
}
