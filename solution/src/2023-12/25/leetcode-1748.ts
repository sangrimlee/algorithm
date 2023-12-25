/**
 * 1748. Sum of Unique Elements
 * https://leetcode.com/problems/sum-of-unique-elements
 */
export function sumOfUnique(nums: number[]): number {
  const counter = new Map<number, number>();
  for (const num of nums) {
    const count = counter.get(num) ?? 0;
    counter.set(num, count + 1);
  }

  return [...counter.entries()].reduce(
    (prev, [num, count]) => (count === 1 ? prev + num : prev),
    0,
  );
}
