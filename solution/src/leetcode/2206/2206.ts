/**
 * 2206. Divide Array Into Equal Pairs
 * https://leetcode.com/problems/divide-array-into-equal-pairs
 */
export function divideArray(nums: number[]): boolean {
  const counter = new Map<number, number>();
  nums.forEach((num) => {
    counter.set(num, (counter.get(num) ?? 0) + 1);
  });
  return [...counter.values()].every((count) => count % 2 === 0);
}
