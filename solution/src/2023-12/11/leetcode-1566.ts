/**
 * 1566. Detect Pattern of Length M Repeated K or More Times
 * https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times
 */
export function containsPattern(arr: number[], m: number, k: number): boolean {
  const n = arr.length;

  let patterns = 0;
  for (let i = 0; i < n - m; i++) {
    patterns = arr[i] === arr[i + m] ? patterns + 1 : 0;
    if (patterns >= m * (k - 1)) {
      return true;
    }
  }
  return false;
}
