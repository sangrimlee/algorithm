/**
 * 2379. Minimum Recolors to Get K Consecutive Black Blocks
 * https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks
 */
export function minimumRecolors(blocks: string, k: number): number {
  const n = blocks.length;

  let answer = Number.MAX_SAFE_INTEGER;

  let wCount = 0;
  let [start, end] = [0, 0];
  while (end < n) {
    if (blocks[end] === 'W') {
      wCount += 1;
    }
    if (end - start + 1 === k) {
      answer = Math.min(answer, wCount);
      if (blocks[start] === 'W') {
        wCount -= 1;
      }
      start += 1;
    }
    end += 1;
  }

  return answer;
}
