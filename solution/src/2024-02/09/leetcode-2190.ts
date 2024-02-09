/**
 * 2190. Most Frequent Number Following Key In an Array
 * https://leetcode.com/problems/most-frequent-number-following-key-in-an-array
 */
export function mostFrequent(nums: number[], key: number): number {
  const n = nums.length;
  const targetCounts = new Map<number, number>();

  let answer = 0;
  let maxCount = -1;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] !== key) continue;
    const target = nums[i + 1];
    const targetCount = (targetCounts.get(target) ?? 0) + 1;
    targetCounts.set(target, targetCount);
    if (maxCount < targetCount) {
      answer = target;
      maxCount = targetCount;
    }
  }
  return answer;
}
