/**
 * 275. H-Index II
 * https://leetcode.com/problems/h-index-ii
 */
export function hIndex(citations: number[]): number {
  const n = citations.length;
  let [start, end] = [0, n - 1];
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (n - mid <= citations[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return n - start;
}
