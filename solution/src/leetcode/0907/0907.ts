/**
 * 907. Sum of Subarray Minimums
 * https://leetcode.com/problems/sum-of-subarray-minimums/
 */
export function sumSubarrayMins(arr: number[]): number {
  const N = arr.length;
  const MOD = 1_000_000_007;
  const stack: number[] = [];
  const dp: number[] = new Array<number>(N).fill(0);

  for (let i = 0; i < N; i++) {
    while (0 < stack.length && arr[i] < arr[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (0 < stack.length) {
      const smallerIndex = stack[stack.length - 1];
      dp[i] = dp[smallerIndex] + (i - smallerIndex) * arr[i];
    } else {
      dp[i] = (i + 1) * arr[i];
    }
    stack.push(i);
  }

  const answer = dp.reduce((prev, curr) => (prev + curr) % MOD, 0);
  return answer;
}
