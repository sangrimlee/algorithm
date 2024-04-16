/**
 * 2899. Last Visited Integers
 * https://leetcode.com/problems/last-visited-integers
 */
export function lastVisitedIntegers(nums: number[]): number[] {
  const seen = [];
  const answer = [];

  let consecutive = 0;
  for (const num of nums) {
    if (num === -1) {
      consecutive += 1;
      if (consecutive <= seen.length) {
        answer.push(seen[seen.length - consecutive]);
      } else {
        answer.push(-1);
      }
    } else {
      consecutive = 0;
      seen.push(num);
    }
  }
  return answer;
}
