/**
 * 2928. Distribute Candies Among Children I
 * https://leetcode.com/problems/distribute-candies-among-children-i
 */
export function distributeCandies(n: number, limit: number): number {
  let answer = 0;
  for (let i = 0; i <= limit; i++) {
    for (let j = 0; j <= Math.min(n - i, limit); j++) {
      const k = n - i - j;
      if (0 <= k && k <= limit) {
        answer += 1;
      }
    }
  }
  return answer;
}
