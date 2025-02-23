/**
 * 1502. Can Make Arithmetic Progression From Sequence
 * https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence
 */
export function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => a - b);
  const difference = arr[1] - arr[0];
  return arr.every((_, i) => i === 0 || arr[i] - arr[i - 1] === difference);
}
