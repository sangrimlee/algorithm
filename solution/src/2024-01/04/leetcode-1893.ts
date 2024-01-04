/**
 * 1893. Check if All the Integers in a Range Are Covered
 * https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered
 */
export function isCovered(ranges: number[][], left: number, right: number): boolean {
  const covered = new Array(52).fill(0);
  ranges.forEach(([start, end]) => {
    covered[start] += 1;
    covered[end + 1] -= 1;
  });
  for (let i = 1; i < covered.length; i++) {
    covered[i] += covered[i - 1];
  }
  return covered.slice(left, right + 1).every((v) => v !== 0);
}
