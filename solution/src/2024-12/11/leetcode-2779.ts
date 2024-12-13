/**
 * 2779. Maximum Beauty of an Array After Applying Operation
 * https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation
 */
export function maximumBeauty(nums: number[], k: number): number {
  const n = nums.length;
  if (n === 1) {
    return 1;
  }

  const maxValue = nums.reduce((prev, num) => (prev > num ? prev : num), 0);
  const counts = new Array<number>(maxValue + 1).fill(0);
  for (const num of nums) {
    counts[Math.max(num - k, 0)] += 1;
    if (num + k + 1 <= maxValue) {
      counts[num + k + 1] -= 1;
    }
  }

  let answer = 0;
  let beauty = 0;
  for (const count of counts) {
    beauty += count;
    answer = Math.max(answer, beauty);
  }
  return answer;
}
