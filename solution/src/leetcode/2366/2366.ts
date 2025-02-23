/**
 * 2366. Minimum Replacements to Sort the Array
 * https://leetcode.com/problems/minimum-replacements-to-sort-the-array
 */
export function minimumReplacement(nums: number[]): number {
  const n = nums.length;

  let answer = 0;
  for (let i = n - 2; 0 <= i; i--) {
    if (nums[i] <= nums[i + 1]) {
      continue;
    }
    const numElements = Math.floor((nums[i] + nums[i + 1] - 1) / nums[i + 1]);

    answer += numElements - 1;
    nums[i] = Math.floor(nums[i] / numElements);
  }

  return answer;
}
