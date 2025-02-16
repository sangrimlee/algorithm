/**
 * 962. Maximum Width Ramp
 * https://leetcode.com/problems/maximum-width-ramp
 */
export function maxWidthRamp(nums: number[]): number {
  const n = nums.length;
  const stack: number[] = [];
  for (let i = 0; i < n; i++) {
    if (stack.length === 0 || nums[i] < nums[stack[stack.length - 1]]) {
      stack.push(i);
    }
  }

  let answer = 0;
  for (let i = n - 1; 0 <= i; i--) {
    while (0 < stack.length && nums[stack[stack.length - 1]] <= nums[i]) {
      answer = Math.max(answer, i - (stack.pop() ?? 0));
    }
  }
  return answer;
}
