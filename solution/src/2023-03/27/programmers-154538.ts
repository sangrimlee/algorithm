import { range } from '@1d1s/lib';

/**
 * 154538. 숫자 변환하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/154538
 */
export function convertNumbers(x: number, y: number, n: number) {
  const dp = new Array(y + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[x] = 0;

  const nextValueFns: Array<(i: number) => number> = [(i) => i + n, (i) => i * 2, (i) => i * 3];

  for (const i of range(x, y)) {
    for (const nextValueFn of nextValueFns) {
      const nextValue = nextValueFn(i);
      if (nextValue <= y) {
        dp[nextValue] = Math.min(dp[i] + 1, dp[nextValue]);
      }
    }
  }

  return dp[y] === Number.MAX_SAFE_INTEGER ? -1 : dp[y];
}
