/**
 * 2913. Subarrays Distinct Element Sum of Squares I
 * https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i
 */
export function sumCounts(nums: number[]): number {
  const n = nums.length;

  let answer = 0;
  for (let i = 0; i < n; i++) {
    const set = new Set<number>();
    for (let j = i; j < n; j++) {
      set.add(nums[j]);
      answer += set.size ** 2;
    }
  }
  return answer;
}
