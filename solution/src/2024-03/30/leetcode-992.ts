/**
 * 992. Subarrays with K Different Integers
 * https://leetcode.com/problems/subarrays-with-k-different-integers
 */
export function subarraysWithKDistinct(nums: number[], k: number): number {
  const n = nums.length;
  const counts = new Array<number>(n + 1).fill(0);

  let answer = 0;
  let [start, mid] = [0, 0];
  let remain = k;
  for (const num of nums) {
    counts[num] += 1;
    if (counts[num] === 1) {
      remain -= 1;
      if (remain < 0) {
        counts[nums[mid]] = 0;
        mid += 1;
        start = mid;
      }
    }

    if (remain <= 0) {
      while (1 < counts[nums[mid]]) {
        counts[nums[mid]] -= 1;
        mid += 1;
      }
      answer += mid - start + 1;
    }
  }

  return answer;
}
