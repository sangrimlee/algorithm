/**
 * 2824. Count Pairs Whose Sum is Less than Target
 * https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target
 */
export function countPairs(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);

  let answer = 0;
  let [start, end] = [0, nums.length - 1];
  while (start < end) {
    if (nums[start] + nums[end] < target) {
      answer += end - start;
      start += 1;
    } else {
      end -= 1;
    }
  }

  return answer;
}
