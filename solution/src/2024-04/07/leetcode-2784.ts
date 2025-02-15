/**
 * 2784. Check if Array is Good
 * https://leetcode.com/problems/check-if-array-is-good
 */
export function isGood(nums: number[]): boolean {
  const n = nums.length - 1;
  const counts = new Array<number>(n).fill(0);

  for (const num of nums) {
    if (n < num) {
      return false;
    }
    counts[num - 1] += 1;
  }

  return counts.every((count, i) => (i === n - 1 ? count === 2 : count === 1));
}
