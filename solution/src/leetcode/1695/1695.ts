/**
 * 1695. Maximum Erasure Value
 * https://leetcode.com/problems/maximum-erasure-value/
 */

export function maximumUniqueSubarray(nums: number[]): number {
  let answer = 0;
  const isExist = new Map<number, boolean>();

  let currentIndex = 0;
  let currentValue = 0;
  nums.forEach((num) => {
    while (isExist.get(num)) {
      isExist.set(nums[currentIndex], false);
      currentValue -= nums[currentIndex];
      currentIndex += 1;
    }
    isExist.set(num, true);
    currentValue += num;
    answer = Math.max(answer, currentValue);
  });

  return answer;
}
