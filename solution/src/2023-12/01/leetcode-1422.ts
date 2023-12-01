import { range } from '@algorithm/lib';

/**
 * 1422. Maximum Score After Splitting a String
 * https://leetcode.com/problems/maximum-score-after-splitting-a-string
 */
export function maxScore(s: string): number {
  const n = s.length;
  const totalScore = s.replace(/0/g, '').length;
  let leftScore = s[0] === '0' ? 1 : 0;
  let rightScore = totalScore + leftScore - 1;

  let answer = leftScore + rightScore;
  for (const i of range(1, n - 2)) {
    const score = parseInt(s[i]);
    leftScore += Math.abs(score - 1);
    rightScore -= score;
    answer = Math.max(answer, leftScore + rightScore);
  }
  return answer;
}
