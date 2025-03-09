/**
 * 873. Length of Longest Fibonacci Subsequence
 * https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/
 */
export function lenLongestFibSubseq(arr: number[]): number {
  const n = arr.length;
  const dp = new Map<string, number>();
  const set = new Set<number>(arr);

  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    const curr = arr[i];
    for (let j = 0; j < i; j++) {
      const prev = arr[j];
      const diff = curr - prev;

      if (diff < prev && set.has(diff)) {
        const prevKey = [diff, prev].toString();
        const currKey = [prev, curr].toString();
        const prevLength = dp.get(prevKey) ?? 2;
        dp.set(currKey, prevLength + 1);
        maxLength = Math.max(maxLength, prevLength + 1);
      }
    }
  }
  return maxLength;
}
