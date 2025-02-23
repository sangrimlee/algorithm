/**
 * 1854. Maximum Population Year
 * https://leetcode.com/problems/maximum-population-year
 */
export function maximumPopulation(logs: number[][]): number {
  const populations = new Array<number>(101).fill(0);
  for (const [birth, death] of logs) {
    populations[birth - 1950] += 1;
    populations[death - 1950] -= 1;
  }

  let answer = 1950;
  let maxPopulation = populations[0];
  for (let i = 1; i < populations.length; i++) {
    populations[i] += populations[i - 1];
    if (maxPopulation < populations[i]) {
      maxPopulation = populations[i];
      answer = i + 1950;
    }
  }
  return answer;
}
