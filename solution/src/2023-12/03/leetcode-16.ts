/**
 * 16. 3Sum Closest
 * https://leetcode.com/problems/3sum-closest
 */
export function threeSumClosest(nums: number[], target: number): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  let answer = 0;
  let minDiff = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n - 2; i++) {
    let [start, end] = [i + 1, n - 1];
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      const diff = Math.abs(target - sum);
      if (diff < minDiff) {
        answer = sum;
        minDiff = diff;
      }
      if (sum === target) {
        return sum;
      }
      if (sum < target) {
        start += 1;
      } else {
        end -= 1;
      }
    }
  }
  return answer;
}
