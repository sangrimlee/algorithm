/**
 * 3289. The Two Sneaky Numbers of Digitville
 * https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville
 */
export function getSneakyNumbers(nums: number[]): number[] {
  const answer: number[] = [];
  const set = new Set<number>();
  for (const num of nums) {
    if (set.has(num)) {
      answer.push(num);
    } else {
      set.add(num);
    }
  }
  return answer;
}
