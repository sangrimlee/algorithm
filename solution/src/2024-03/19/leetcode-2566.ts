/**
 * 2566. Maximum Difference by Remapping a Digit
 * https://leetcode.com/problems/maximum-difference-by-remapping-a-digit
 */
export function minMaxDifference(num: number): number {
  function getMinMaxValue(num: number, replacement: number) {
    let [maxValue, minValue, decimal] = [0, 0, 1];
    while (0 < num) {
      const digit = num % 10;
      maxValue += (digit === replacement ? 9 : digit) * decimal;
      minValue += (digit === replacement ? 0 : digit) * decimal;
      decimal *= 10;
      num = Math.floor(num / 10);
    }
    return [maxValue, minValue];
  }

  let [maxValue, minValue] = [num, num];
  for (let digit = 0; digit <= 9; digit++) {
    const [currentMaxValue, currentMinValue] = getMinMaxValue(num, digit);
    maxValue = Math.max(maxValue, currentMaxValue);
    minValue = Math.min(minValue, currentMinValue);
  }
  return maxValue - minValue;
}
