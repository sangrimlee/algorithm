/**
 * 2078. Two Furthest Houses With Different Colors
 * https://leetcode.com/problems/two-furthest-houses-with-different-colors
 */
export function maxDistance(colors: number[]): number {
  const n = colors.length;
  let [start, end] = [0, n - 1];
  while (colors[0] === colors[end]) {
    end -= 1;
  }
  while (colors[n - 1] === colors[start]) {
    start += 1;
  }
  return Math.max(end, n - 1 - start);
}
