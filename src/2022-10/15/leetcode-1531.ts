/**
 * 1531. String Compression II
 * https://leetcode.com/problems/string-compression-ii/
 */
export function getLengthOfOptimalCompression(s: string, k: number): number {
  function initArray(n: number, fillValue?: number) {
    return new Array(n).fill(fillValue);
  }

  function getCharCode(char: string) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }

  function caculateLength(count: number) {
    if (count === 0) return 0;
    if (count === 1) return 1;
    if (count < 10) return 2;
    if (count < 100) return 3;
    return 4;
  }

  const n = s.length;
  const dp = initArray(n).map(() =>
    initArray(26).map(() =>
      initArray(n + 1).map(() => initArray(k + 1, Number.MAX_SAFE_INTEGER))
    )
  );

  function dynamicProgramming(
    i: number,
    char: number,
    count: number,
    k: number
  ): number {
    if (i === s.length) {
      return caculateLength(count);
    }
    if (dp[i][char][count][k] != Number.MAX_SAFE_INTEGER) {
      return dp[i][char][count][k];
    }

    const nextChar = getCharCode(s[i]);
    if (0 < k) {
      dp[i][char][count][k] = dynamicProgramming(i + 1, char, count, k - 1);
    }
    if (char === nextChar) {
      dp[i][char][count][k] = Math.min(
        dp[i][char][count][k],
        dynamicProgramming(i + 1, char, count + 1, k)
      );
    } else {
      dp[i][char][count][k] = Math.min(
        dp[i][char][count][k],
        caculateLength(count) + dynamicProgramming(i + 1, nextChar, 1, k)
      );
    }
    return dp[i][char][count][k];
  }

  return dynamicProgramming(0, 0, 0, k);
}
