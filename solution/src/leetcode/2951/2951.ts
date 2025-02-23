/**
 * 2951. Find the Peaks
 * https://leetcode.com/problems/find-the-peaks
 */
export function findPeaks(mountain: number[]): number[] {
  const n = mountain.length;

  const peaks: number[] = [];
  for (let i = 1; i < n - 1; i++) {
    if (mountain[i - 1] < mountain[i] && mountain[i] > mountain[i + 1]) {
      peaks.push(i);
    }
  }
  return peaks;
}
