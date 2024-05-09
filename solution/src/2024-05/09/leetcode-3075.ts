/**
 * 3075. Maximize Happiness of Selected Children
 * https://leetcode.com/problems/maximize-happiness-of-selected-children
 */
export function maximumHappinessSum(happiness: number[], k: number): number {
  happiness.sort((a, b) => b - a);

  let answer = 0;
  let decrease = 0;
  for (let i = 0; i < k; i++) {
    answer += Math.max(happiness[i] - decrease, 0);
    decrease += 1;
  }
  return answer;
}
