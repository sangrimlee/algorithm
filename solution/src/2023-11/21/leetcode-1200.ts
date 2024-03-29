/**
 * 1200. Minimum Absolute Difference
 * https://leetcode.com/problems/minimum-absolute-difference
 */
export function minimumAbsDifference(arr: number[]): number[][] {
  const n = arr.length;
  arr.sort((a, b) => a - b);

  let answer: number[][] = [];
  let minDiff = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n - 1; i++) {
    const diff = arr[i + 1] - arr[i];
    if (diff < minDiff) {
      minDiff = diff;
      answer = [[arr[i], arr[i + 1]]];
    } else if (diff === minDiff) {
      answer.push([arr[i], arr[i + 1]]);
    }
  }
  return answer;
}
