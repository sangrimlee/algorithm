/**
 * 1313. Decompress Run-Length Encoded List
 * https://leetcode.com/problems/decompress-run-length-encoded-list
 */
export function decompressRLElist(nums: number[]): number[] {
  const n = nums.length;
  const answer: number[] = [];
  for (let i = 0; i < n; i += 2) {
    const [freq, val] = nums.slice(i, i + 2);
    answer.push(...new Array<number>(freq).fill(val));
  }
  return answer;
}
