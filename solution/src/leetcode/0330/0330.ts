/**
 * 330. Patching Array
 * https://leetcode.com/problems/patching-array
 */
export function minPatches(nums: number[], n: number): number {
  let answer = 0;

  let num = 1;
  let numsIndex = 0;
  while (num <= n) {
    if (numsIndex < nums.length && num >= nums[numsIndex]) {
      num += nums[numsIndex];
      numsIndex += 1;
    } else {
      num += num;
      answer += 1;
    }
  }
  return answer;
}
