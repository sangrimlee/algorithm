/**
 * 1299. Replace Elements with Greatest Element on Right Side
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side
 */
export function replaceElements(arr: number[]): number[] {
  const n = arr.length;
  let maxValue = -1;
  for (let i = n - 1; 0 <= i; i--) {
    [arr[i], maxValue] = [maxValue, Math.max(arr[i], maxValue)];
  }
  return arr;
}
