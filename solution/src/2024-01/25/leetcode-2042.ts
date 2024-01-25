/**
 * 2042. Check if Numbers Are Ascending in a Sentence
 * https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence
 */
export function areNumbersAscending(s: string): boolean {
  const nums = s.split(' ').filter((v) => !isNaN(parseInt(v)));
  return nums.every((num, i) => i === 0 || parseInt(nums[i - 1]) < parseInt(num));
}
