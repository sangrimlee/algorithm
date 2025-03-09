/**
 * 2460. Apply Operations to an Array
 * https://leetcode.com/problems/apply-operations-to-an-array
 */
export function applyOperations(nums: number[]): number[] {
  const n = nums.length;
  let writeIndex = 0;
  for (let i = 0; i < n; i++) {
    if (i !== n - 1 && nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }

    if (nums[i] !== 0) {
      if (i !== writeIndex) {
        [nums[i], nums[writeIndex]] = [nums[writeIndex], nums[i]];
      }
      writeIndex += 1;
    }
  }
  return nums;
}
