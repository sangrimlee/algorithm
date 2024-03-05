/**
 * 2441. Largest Positive Integer That Exists With Its Negative
 * https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative
 */
export function findMaxK(nums: number[]): number {
  let answer = -1;
  const set = new Set(nums);
  for (const num of nums) {
    if (set.has(-num)) {
      answer = Math.max(answer, Math.abs(num));
    }
    set.add(num);
  }
  return answer;
}
