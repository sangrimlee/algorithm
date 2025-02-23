/**
 * 2444. Count Subarrays With Fixed Bounds
 * https://leetcode.com/problems/count-subarrays-with-fixed-bounds
 */
export function countSubarrays(nums: number[], minK: number, maxK: number): number {
  let answer = 0;

  let minIndex = -1;
  let maxIndex = -1;
  let outIndex = -1;
  nums.forEach((num, i) => {
    if (num < minK || maxK < num) {
      outIndex = i;
    }
    if (num === minK) {
      minIndex = i;
    }
    if (num === maxK) {
      maxIndex = i;
    }
    answer += Math.max(0, Math.min(minIndex, maxIndex) - outIndex);
  });

  return answer;
}
