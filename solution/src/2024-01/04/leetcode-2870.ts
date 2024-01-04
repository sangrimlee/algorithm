/**
 * 2870. Minimum Number of Operations to Make Array Empty
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty
 */
export function minOperations(nums: number[]): number {
  const counter = new Map<number, number>();
  nums.forEach((num) => {
    counter.set(num, (counter.get(num) ?? 0) + 1);
  });

  let answer = 0;
  for (const count of counter.values()) {
    if (count === 1) {
      return -1;
    }
    answer += count % 3 === 0 ? Math.floor(count / 3) : Math.floor(count / 3) + 1;
  }
  return answer;
}
