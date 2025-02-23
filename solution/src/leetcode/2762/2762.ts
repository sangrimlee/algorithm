/**
 * 2762. Continuous Subarrays
 * https://leetcode.com/problems/continuous-subarrays
 */
export function continuousSubarrays(nums: number[]): number {
  const n = nums.length;

  let answer = 0;
  let [start, windowSize] = [0, 0];
  let [minValue, maxValue] = [nums[0], nums[0]];
  for (let end = 0; end < n; end++) {
    minValue = Math.min(minValue, nums[end]);
    maxValue = Math.max(maxValue, nums[end]);

    if (2 >= maxValue - minValue) {
      continue;
    }

    windowSize = end - start;
    answer += Math.floor((windowSize * (windowSize + 1)) / 2);

    start = end;
    [minValue, maxValue] = [nums[start], nums[start]];

    while (0 < start && 2 >= Math.abs(nums[end] - nums[start - 1])) {
      start -= 1;
      minValue = Math.min(minValue, nums[start]);
      maxValue = Math.max(maxValue, nums[start]);
    }

    if (start < end) {
      windowSize = end - start;
      answer -= Math.floor((windowSize * (windowSize + 1)) / 2);
    }
  }

  windowSize = n - start;
  answer += Math.floor((windowSize * (windowSize + 1)) / 2);
  return answer;
}
