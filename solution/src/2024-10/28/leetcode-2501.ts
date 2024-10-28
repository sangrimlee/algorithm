/**
 * 2501. Longest Square Streak in an Array
 * https://leetcode.com/problems/longest-square-streak-in-an-array
 */
export function longestSquareStreak(nums: number[]): number {
  const MAX_NUM = 10 ** 5;
  const set = new Set(nums);

  let answer = 0;
  for (const num of nums) {
    let current = num;
    let maxLength = 0;
    while (set.has(current) && current <= MAX_NUM) {
      maxLength += 1;
      current *= current;
    }
    answer = Math.max(answer, maxLength);
  }
  return answer < 2 ? -1 : answer;
}
