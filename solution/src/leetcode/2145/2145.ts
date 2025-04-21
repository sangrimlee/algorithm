/**
 * 2145. Count the Hidden Sequences
 * https://leetcode.com/problems/count-the-hidden-sequences
 */
export function numberOfArrays(differences: number[], lower: number, upper: number): number {
  const rangeSize = upper - lower;

  let minValue = 0;
  let maxValue = 0;
  let currentValue = 0;
  for (const difference of differences) {
    currentValue += difference;
    minValue = Math.min(minValue, currentValue);
    maxValue = Math.max(maxValue, currentValue);
    // 최대값과 최소값의 차이가 기존의 범위 크기 보다 크다면 `hidden`은 존재할 수 없다.
    if (maxValue - minValue > rangeSize) {
      return 0;
    }
  }

  // 기존의 범위 내에서 시작점을 이동시킬 수 있는 범위의 크기
  return rangeSize - (maxValue - minValue) + 1;
}
