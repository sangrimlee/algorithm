/**
 * 1431. Kids With the Greatest Number of Candies
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies
 */
export function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxCandies = candies.reduce((prev, curr) => Math.max(prev, curr), 0);
  return candies.map((candy) => candy + extraCandies >= maxCandies);
}
