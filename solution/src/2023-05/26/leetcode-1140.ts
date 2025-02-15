/**
 * 1140. Stone Game II
 * https://leetcode.com/problems/stone-game-ii
 */
export function stoneGameII(piles: number[]): number {
  const n = piles.length;
  const dp: number[][][] = Array.from({ length: 2 }).map(() =>
    Array.from({ length: n + 1 }).map(() => new Array<number>(n + 1).fill(-1)),
  );

  const solve = (p = 0, i = 0, m = 1) => {
    if (i === n) {
      return 0;
    }
    if (dp[p][i][m] !== -1) {
      return dp[p][i][m];
    }

    let stone = 0;
    let result = p === 0 ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;
    for (let stoneCnt = 1; stoneCnt <= Math.min(2 * m, n - i); stoneCnt++) {
      stone += piles[i + stoneCnt - 1];
      if (p === 0) {
        result = Math.max(result, stone + solve(1, i + stoneCnt, Math.max(m, stoneCnt)));
      } else {
        result = Math.min(result, solve(0, i + stoneCnt, Math.max(m, stoneCnt)));
      }
    }
    dp[p][i][m] = result;
    return result;
  };

  return solve();
}
