/**
 * 2597. The Number of Beautiful Subsets
 * https://leetcode.com/problems/the-number-of-beautiful-subsets
 */
export function beautifulSubsets(nums: number[], k: number): number {
  let answer = 0;
  const n = nums.length;
  const map = new Map<number, number>();
  function backtrack(i: number) {
    if (i === n) {
      answer += 1;
      return;
    }

    const num = nums[i];
    if (!map.has(num - k) && !map.has(num + k)) {
      map.set(num, (map.get(num) ?? 0) + 1);
      backtrack(i + 1);
      map.set(num, (map.get(num) ?? 0) - 1);
      if (map.get(num) === 0) {
        map.delete(num);
      }
    }

    backtrack(i + 1);
  }
  backtrack(0);
  return answer - 1;
}
