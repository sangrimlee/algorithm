/**
 * 2379. Minimum Recolors to Get K Consecutive Black Blocks
 * https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks
 */
export function minimumRecolors(blocks: string, k: number): number {
  const n = blocks.length;
  let minColorChange = n;

  let start = 0;
  let whiteCount = 0;
  for (let end = 0; end < n; end++) {
    if (blocks[end] === 'W') {
      whiteCount += 1;
    }

    if (end - start + 1 === k) {
      minColorChange = Math.min(minColorChange, whiteCount);
      if (blocks[start] === 'W') {
        whiteCount -= 1;
      }
      start += 1;
    }
  }
  return minColorChange;
}
