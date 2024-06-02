/**
 * 1079. Letter Tile Possibilities
 * https://leetcode.com/problems/letter-tile-possibilities
 */
export function numTilePossibilities(tiles: string): number {
  const tileCount = new Array<number>(26).fill(0);
  for (const tile of tiles) {
    tileCount[tile.charCodeAt(0) - 'A'.charCodeAt(0)] += 1;
  }

  function dfs(): number {
    let result = 0;
    for (let i = 0; i < 26; i++) {
      if (tileCount[i] === 0) continue;
      result += 1;
      tileCount[i] -= 1;
      result += dfs();
      tileCount[i] += 1;
    }
    return result;
  }

  return dfs();
}
