/**
 * 229. Majority Element II
 * https://leetcode.com/problems/majority-element-ii
 */
export function majorityElement(nums: number[]): number[] {
  const threshold = Math.floor(nums.length / 3);
  const counter = new Map<number, number>();

  const answer = new Set<number>();
  for (const num of nums) {
    const count = counter.get(num) ?? 0;
    counter.set(num, count + 1);
    if (threshold <= count) {
      answer.add(num);
    }
  }

  return [...answer];
}
