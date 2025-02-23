/**
 * 1423. Maximum Points You Can Obtain from Cards
 * https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
 */
export function maxScore(cardPoints: number[], k: number): number {
  const sumCardPoints = (prev: number, curr: number) => prev + curr;

  const n = cardPoints.length;
  const totalPoint = cardPoints.reduce(sumCardPoints, 0);
  let prevPoint = cardPoints.slice(0, n - k).reduce(sumCardPoints, 0);

  let answer = totalPoint - prevPoint;
  for (let i = 0; i < k; i++) {
    prevPoint = prevPoint - cardPoints[i] + cardPoints[i + (n - k)];
    answer = Math.max(answer, totalPoint - prevPoint);
  }
  return answer;
}
