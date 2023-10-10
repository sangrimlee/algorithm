/**
 * 485. Max Consecutive Ones
 * https://leetcode.com/problems/max-consecutive-ones
 */
export function findMaxConsecutiveOnes(nums: number[]): number {
  let lastZero = -1;

  let answer = 0;
  nums.forEach((num, i) => {
    if (num === 1) {
      answer = Math.max(answer, i - lastZero);
    } else {
      lastZero = i;
    }
  });
  return answer;
}
