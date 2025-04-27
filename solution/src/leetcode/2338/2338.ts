/**
 * 2338. Count the Number of Ideal Arrays
 * https://leetcode.com/problems/count-the-number-of-ideal-arrays
 */
export function idealArrays(n: number, maxValue: number): number {
  const MOD = 10 ** 9 + 7;

  /**
   * 점점 증가하는 이상적인 배열의 최대 길이는 14입니다.
   * 2^14 > 10,000 가능한 가장 긴 점점 증가하는 이상적 배열은 [1, 2, 4, 8, ..., 8192]입니다.
   */
  const MAX_LEN = Math.min(n, 14);

  // dp[i][j]는 길이 i의 j로 끝나는 이상적인 배열의 개수
  const dp = Array.from({ length: MAX_LEN + 1 }, () => new Array<number>(maxValue + 1).fill(0));

  // `maxValue`까지 모든 수에 대한 약수
  const divisors = getDivisors(maxValue);

  // 길이가 1인 이상적인 배열의 개수는 1로 초기화합니다.
  for (let i = 1; i <= maxValue; i++) {
    dp[1][i] = 1;
  }

  /**
   * dp[i][j] = sum(dp[i-1][k])
   * 단, j는 k로 나누어 떨어져야 함 (즉, k는 j의 약수)
   */
  for (let i = 2; i <= MAX_LEN; i++) {
    for (let j = 1; j <= maxValue; j++) {
      for (const k of divisors.get(j) ?? []) {
        dp[i][j] = (dp[i][j] + dp[i - 1][k]) % MOD;
      }
    }
  }

  // dp[i][0] = 길이가 i인 점점 증가하는 이상적인 배열의 개수
  for (let i = 1; i <= MAX_LEN; i++) {
    for (let j = 1; j <= maxValue; j++) {
      dp[i][0] = (dp[i][0] + dp[i][j]) % MOD;
    }
  }

  /**
   * 조합론을 사용한, 길이가 i인 점점 증가하는 이상적인 배열의 개수로부터
   * 길이가 n인 증가하는 이상적인 배열의 총 개수를 도출
   */
  let answer = 0n;
  for (let i = 1; i <= MAX_LEN; i++) {
    answer += nCk(n - 1, i - 1) * BigInt(dp[i][0]);
    answer %= BigInt(MOD);
  }
  return Number(answer);
}

// "n Choose k"를 계산
function nCk(n: number, k: number): bigint {
  let result = 1n;
  for (let i = 1; i <= k; i++) {
    result = (result * BigInt(n - (i - 1))) / BigInt(i);
  }
  return result;
}

// `maxValue`까지의 모든 수에 대한 약수들을 계산
function getDivisors(maxValue: number): Map<number, number[]> {
  const divisors = new Map<number, number[]>();
  for (let value = 1; value <= maxValue; value++) {
    divisors.set(value, []);
  }
  for (let value = 1; value <= maxValue; value++) {
    let multiply = 2;
    while (value * multiply <= maxValue) {
      divisors.get(value * multiply)?.push(value);
      multiply += 1;
    }
  }
  return divisors;
}
