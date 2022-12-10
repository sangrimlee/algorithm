/**
 * 135. Candy
 * https://leetcode.com/problems/candy/
 */
export function candy(ratings: number[]): number {
  const n = ratings.length;
  const candies = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    if (ratings[i - 1] < ratings[i]) {
      candies[i] = Math.max(candies[i], candies[i - 1] + 1);
    }
    if (ratings[n - i] < ratings[n - i - 1]) {
      candies[n - i - 1] = Math.max(candies[n - i - 1], candies[n - i] + 1);
    }
  }
  return candies.reduce((prev, curr) => prev + curr, 0);
}
