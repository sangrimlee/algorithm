/**
 * 2640. Find the Score of All Prefixes of an Array
 * https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array
 */
export function findPrefixScore(nums: number[]): number[] {
  const answer: number[] = [];
  let sum = 0;
  let maxValue = 0;
  for (const num of nums) {
    maxValue = Math.max(maxValue, num);
    sum += maxValue + num;
    answer.push(sum);
  }
  return answer;
}
