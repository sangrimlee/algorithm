/**
 * 670. Maximum Swap
 * https://leetcode.com/problems/maximum-swap
 */
export function maximumSwap(num: number): number {
  const digits = getDigits(num);
  const n = digits.length;
  const lastIndices = new Array<number>(10).fill(-1);

  for (let i = 0; i < n; i++) {
    lastIndices[digits[i]] = i;
  }

  for (let i = 0; i < n; i++) {
    for (let d = 9; digits[i] < d; d--) {
      if (i < lastIndices[d]) {
        swap(digits, i, lastIndices[d]);
        return parseInt(digits.join(''));
      }
    }
  }
  return num;
}

function getDigits(num: number): number[] {
  return num
    .toString()
    .split('')
    .map((v) => parseInt(v));
}

function swap(arr: number[], i: number, j: number): void {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
