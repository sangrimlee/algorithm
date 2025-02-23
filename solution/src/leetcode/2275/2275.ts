/**
 * 2275. Largest Combination With Bitwise AND Greater Than Zero
 * https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero
 */
export function largestCombination(candidates: number[]): number {
  const MAX_SIZE = 10e7;

  let answer = 0;
  for (let bit = 1; bit < MAX_SIZE; bit <<= 1) {
    let count = 0;
    for (const candidate of candidates) {
      if ((candidate & bit) !== 0) {
        count += 1;
      }
    }
    answer = Math.max(answer, count);
  }
  return answer;
}
