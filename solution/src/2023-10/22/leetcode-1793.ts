/**
 * 1793. Maximum Score of a Good Subarray
 * https://leetcode.com/problems/maximum-score-of-a-good-subarray
 */
export function maximumScore(nums: number[], k: number): number {
  const n = nums.length;
  let [start, end] = [k, k];
  let answer = nums[k];
  let minValue = nums[k];

  while (0 < start || end < n - 1) {
    if (start === 0 || (end < n - 1 && nums[start - 1] < nums[end + 1])) {
      end += 1;
    } else {
      start -= 1;
    }
    minValue = Math.min(minValue, nums[start], nums[end]);
    answer = Math.max(answer, minValue * (end - start + 1));
  }

  return answer;
}
