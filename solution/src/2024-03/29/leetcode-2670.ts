/**
 * 2670. Find the Distinct Difference Array
 * https://leetcode.com/problems/find-the-distinct-difference-array
 */
export function distinctDifferenceArray(nums: number[]): number[] {
  const answer: number[] = [];
  const suffix = new Map<number, number>();
  const prefix = new Map<number, number>();
  nums.forEach((num) => {
    suffix.set(num, (suffix.get(num) ?? 0) + 1);
  });
  nums.forEach((num) => {
    suffix.set(num, (suffix.get(num) ?? 0) - 1);
    prefix.set(num, (prefix.get(num) ?? 0) + 1);
    if (suffix.get(num) === 0) {
      suffix.delete(num);
    }
    answer.push(prefix.size - suffix.size);
  });
  return answer;
}
