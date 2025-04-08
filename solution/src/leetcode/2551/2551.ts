/**
 * 2551. Put Marbles in Bags
 * https://leetcode.com/problems/put-marbles-in-bags
 */
export function putMarbles(weights: number[], k: number): number {
  const n = weights.length;
  const pairWeights: number[] = [];
  for (let i = 0; i < n - 1; i++) {
    pairWeights.push(weights[i] + weights[i + 1]);
  }
  pairWeights.sort((a, b) => a - b);

  let answer = 0;
  for (let i = 0; i < k - 1; i++) {
    answer += pairWeights[n - i - 2] - pairWeights[i];
  }
  return answer;
}
