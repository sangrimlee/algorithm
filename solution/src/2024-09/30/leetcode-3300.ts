/**
 * 3300. Minimum Element After Replacement With Digit Sum
 * https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum
 */
export function minElement(nums: number[]): number {
  return nums.reduce((prev, num) => Math.min(prev, sumOfDigits(num)), Number.MAX_SAFE_INTEGER);
}

function sumOfDigits(num: number) {
  let result = 0;
  while (0 < num) {
    result += num % 10;
    num = Math.floor(num / 10);
  }
  return result;
}
