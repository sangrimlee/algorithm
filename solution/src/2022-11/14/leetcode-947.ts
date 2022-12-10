/**
 * 947. Most Stones Removed with Same Row or Column
 * https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/
 */
export function removeStones(stones: number[][]): number {
  const rows = new Map<number, number[]>();
  const cols = new Map<number, number[]>();
  const visited = new Map<string, boolean>();

  for (const [y, x] of stones) {
    rows.set(y, [...(rows.get(y) || []), x]);
    cols.set(x, [...(cols.get(x) || []), y]);
  }

  const createKey = (y: number, x: number) => `${y}-${x}`;

  const dfs = (y: number, x: number) => {
    const key = createKey(y, x);
    if (visited.get(key)) return;

    visited.set(key, true);
    const row = rows.get(y);
    const col = cols.get(x);
    if (row) {
      for (const nx of row) {
        dfs(y, nx);
      }
    }
    if (col) {
      for (const ny of col) {
        dfs(ny, x);
      }
    }
    return;
  };

  let connected = 0;
  for (const [y, x] of stones) {
    if (!visited.get(createKey(y, x))) {
      dfs(y, x);
      connected += 1;
    }
  }
  return stones.length - connected;
}
