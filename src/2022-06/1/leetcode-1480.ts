/*
  1480. Running Sum of 1d Array
  https://leetcode.com/problems/running-sum-of-1d-array/
*/

export function runningSum(nums: number[]): number[] {
  /* Iteration
  const ret: number[] = [];
  let previousValue = 0;
  nums.forEach((num) => {
    previousValue += num;
    ret.push(previousValue);
  });
  return ret;
  */

  /* Use reduce */
  function reduceFunc(
    [result, previousValue]: [number[], number],
    currentValue: number
  ): [number[], number] {
    return [
      [...result, previousValue + currentValue],
      previousValue + currentValue,
    ];
  }
  return nums.reduce(reduceFunc, [[], 0])[0];
}
