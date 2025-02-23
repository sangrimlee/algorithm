/**
 * 2460. Apply Operations to an Array
 * https://leetcode.com/problems/apply-operations-to-an-array
 */
export function applyOperations(nums: number[]): number[] {
  function operate(nums: number[]): number[] {
    const result: number[] = [...nums];
    for (let i = 0; i < result.length - 1; i++) {
      if (result[i] === result[i + 1]) {
        result[i] *= 2;
        result[i + 1] = 0;
      }
    }
    return result;
  }

  function shiftAllZero(nums: number[]): number[] {
    const notZero = nums.filter((num) => num !== 0);
    return [...notZero, ...new Array<number>(nums.length - notZero.length).fill(0)];
  }

  return shiftAllZero(operate(nums));
}
