/**
 * 2739. Total Distance Traveled
 * https://leetcode.com/problems/total-distance-traveled
 */
export function distanceTraveled(mainTank: number, additionalTank: number): number {
  let answer = 0;
  for (let i = 1; i <= mainTank; i++) {
    if (additionalTank !== 0 && i % 5 === 0) {
      additionalTank -= 1;
      mainTank += 1;
    }
    answer += 10;
  }
  return answer;
}
