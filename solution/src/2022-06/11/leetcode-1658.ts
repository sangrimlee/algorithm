/**
 * 1658. Minimum Operations to Reduce X to Zero
 * https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
 */

export function minOperations(nums: number[], x: number): number {
  const n = nums.length;
  const totalValue = nums.reduce((prev, curr) => prev + curr, 0);
  if (totalValue <= x) {
    return totalValue === x ? nums.length : -1;
  }

  let answer = Infinity;
  let leftIndex = 0;
  let currentValue = 0;
  nums.forEach((num, rightIndex) => {
    currentValue += num;
    while (totalValue - x < currentValue) {
      currentValue -= nums[leftIndex];
      leftIndex += 1;
    }
    if (currentValue === totalValue - x) {
      answer = Math.min(answer, n - (rightIndex - leftIndex + 1));
    }
  });

  return answer !== Infinity ? answer : -1;
}
