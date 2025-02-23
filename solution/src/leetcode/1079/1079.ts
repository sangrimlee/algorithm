/**
 * 1079. Letter Tile Possibilities
 * https://leetcode.com/problems/letter-tile-possibilities
 */
export function numTilePossibilities(tiles: string): number {
  const tileCounter = new Map<string, number>();
  for (const tile of tiles) {
    tileCounter.set(tile, (tileCounter.get(tile) ?? 0) + 1);
  }

  let totalCount = 0;
  function backtrack(): void {
    for (const [tile, tileCount] of tileCounter) {
      if (tileCount === 0) {
        continue;
      }
      totalCount += 1;
      tileCounter.set(tile, tileCount - 1);
      backtrack();
      tileCounter.set(tile, tileCount);
    }
  }
  backtrack();
  return totalCount;
}
