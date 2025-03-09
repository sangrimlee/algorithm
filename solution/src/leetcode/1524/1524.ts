/**
 * 1524. Number of Sub-arrays With Odd Sum
 * https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum
 */
export function numOfSubarrays(arr: number[]): number {
  const MOD = 10 ** 9 + 7;

  let result = 0;
  let prefixSum = 0;
  let oddCount = 0;
  let evenCount = 1; // 초기 누적합 0은 짝수
  for (const num of arr) {
    prefixSum += num;
    if (prefixSum % 2 === 0) {
      result += oddCount;
      evenCount += 1;
    } else {
      result += evenCount;
      oddCount += 1;
    }
    result %= MOD;
  }
  return result;
}
