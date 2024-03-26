/**
 * 2644. Find the Maximum Divisibility Score
 * https://leetcode.com/problems/find-the-maximum-divisibility-score
 */
export function maxDivScore(nums: number[], divisors: number[]): number {
  function getScore(divisor: number) {
    return nums.filter((num) => num % divisor === 0).length;
  }

  let answer = nums.length;
  let maxScore = -1;
  divisors.forEach((divisor) => {
    const score = getScore(divisor);
    if (maxScore < score) {
      maxScore = score;
      answer = divisor;
    } else if (maxScore === score) {
      answer = Math.min(answer, divisor);
    }
  });
  return answer;
}
